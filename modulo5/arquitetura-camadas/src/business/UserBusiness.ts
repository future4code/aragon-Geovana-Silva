import { UserDatabase } from "../database/UserDatabase"
import { User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    public signup = async (input: any) => {
        const { name, email, password } = input

        if(!name || !email || !password || name === "" || email === "" || password === ""){
            throw new Error(`Params required!`)
        }

        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string"){
            throw new Error(`Params must be a string!`)
        }

        if(name.length < 3){
            throw new Error(`Name must be > 2`)
        }

        if(password.length < 6){
            throw new Error(`Password must be > 5`)
        }

        const idGenerator= new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword,
            USER_ROLES.NORMAL
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Registration successfully completed!",
            token
        }
        return response
    }

    public login = async (input: any) => {
        const { email, password } = input

        if(typeof email !== "string" || typeof password !== "string"){
            throw new Error(`Params must be a string!`)
        }

        if(password.length < 6){
            throw new Error(`Password must be > 5`)
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("Email must have '@' and '.com'.")
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.findByEmail(email)

        if(!userDB){
            throw new Error(`Email not found!`)
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const hashManager = new HashManager()
        const isPasswordCorrect = await hashManager.compare(
            password,
            user.getPassword()
        )

        if(!isPasswordCorrect){
            throw new Error(`Incorrect/invalid password`)
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload) 

        const response = {
            message: "Login successfully completed!",
            token
        }
        return response
    }

    public getAllUsers = async (input: any) => {
        const token = input.token
        const search = input.search || ""
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        if (!token) {
            throw new Error("Token required!")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token required/invalid!")
        }

        const userDatabase = new UserDatabase()
        const isUserExists = await userDatabase.checkExistsId(payload.id)

        if (!isUserExists) {
            throw new Error("Token invalid!")
        }

        const usersDB = await userDatabase.getAllUsers(
            search,
            sort,
            limit,
            offset
        )

        const users = usersDB.map((user) => {
            return new User(
                user.id,
                user.name,
                user.email,
                user.password,
                user.role
            )
        })

        const result = users.map((user) => {
            return {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }
        })

        const response = {
            users: result
        }
        return response
    }

    public deleteUser = async (input: any) => {
        const { token, id } = input

        if (!token) {
            throw new Error("Token required!")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token invalid!")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Only admins can access.")
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.findById(id)

        if (!userDB) {
            throw new Error("Id doesn't exist!")
        }

        if (id === payload.id) {
            throw new Error("You cannot delete your own account.")
        }

        const userToDelete = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )
        await userDatabase.deleteUser(userToDelete.getId())

        const response = {
            message: "Deleted!"
        }

        return response
    }
}