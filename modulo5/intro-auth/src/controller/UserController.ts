import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { Request, Response } from "express"

export class UserController {
    public signup = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const nickname = req.body.nickname as string
            const email = req.body.email as string
            const password = req.body.password as string

            if(!nickname || !email || !password || nickname === "" || email === "" || password === ""){
                throw new Error(`Parâmetros vazios!`)
            }

            const idGenerator = new IdGenerator
            const id = idGenerator.generate()

            const user = new User (
                id,
                nickname,
                email,
                password
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({ message: "Registrado com sucesso!", token})
        } catch (error) {
            if( typeof error.message === "string" && error.message.includes("Entrada duplicada.")){
                return res.status(400).send("Email já existe!")
            } res.status(errorCode).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const email = req.body.email
            const password = req.body.password

            if(!email || !password || email === "" || password === ""){
                errorCode = 401
                throw new Error(`Email e/ou senha não encontrada.`)
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findEmail(email)

            if(!userDB){
                errorCode = 401
                throw new Error(`Email não encontrado.`)
            }

            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password
            )

            if(user.getPassword() !== password){
                errorCode = 401
                throw new Error(`Senha inválida.`)
            }

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(200).send({ message: "Login realizado com sucesso!", token })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public getAllUsers = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload){
                errorCode = 401
                throw new Error(`Token perdido ou inválido.`)
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.getAllUsers()

            const users = userDB.map((user) => {
                new User(
                    user.id,
                    user.nickname,
                    user.email,
                    user.password
                )
            })

            res.status(200).send({ users })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public updateUser = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const nickname = req.body.nickname
            const email = req.body.email
            const password = req.body.password
            const id = req.params.id
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload){
                errorCode = 401
                throw new Error(`Token perdido ou inválido.`)
            }

            const userDatabase = new UserDatabase()
            await userDatabase.updateUser(nickname, email, password, id)

            res.status(200).send("Updated!")
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const id = req.params.id
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload){
                errorCode = 401
                throw new Error(`Token perdido ou inválido.`)
            }

            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(id)

            res.status(200).send("Deleted!")
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}