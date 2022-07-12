import express, { Request, Response } from "express"
import cors from "cors"
import { users, User } from "./data"

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is working!")
})

//2
app.get("/users", (req: Request, res: Response) => {
    try {
        const role = req.query.role
        if (role !== "Admin" && role !== "Normal") {
            res.statusCode = 422
            throw new Error("Choose between admin or normal.")
        }
        if (!role) {
            return res.status(200).send(users)
        }
        const userFilter = users.filter(user =>
            user.role === role
        )
        res.status(200).send({ users: userFilter })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})

//3
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, email, role, age } = req.body

        if (!name && !email && !role && !age) {
            res.statusCode = 400
            throw new Error("Doesn't exist!")
        }

        if (typeof name !== "string" || typeof email !== "string") {
            res.statusCode = 400
            throw new Error("This property must be a string!")
        }

        if (typeof age !== "number") {
            res.statusCode = 400
            throw new Error("This property must be a number!")
        }

        const indexEmail = users.findIndex(user => user.email === email)
        if (indexEmail < 0) {
            res.statusCode = 422
            throw new Error("Email already registered!")
        }
        if (role !== "Admin" || role !== "Normal") {
            res.statusCode = 422
            throw new Error("Invalid typing! Must choose between Admin or Normal.")
        }
        const lastUser = users[users.length - 1]
        const newUser: User = {
            id: lastUser.id + 1,
            name: name,
            email: email,
            role: role,
            age: age
        }

        users.push(newUser)
        res.status(201).send({ message: "User created!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})

//4
app.put("/users/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { email } = req.body

        if (!email) {
            res.statusCode = 422
            throw new Error("User email doesn't exist! Please, inform a valid Email.")
        }

        if (typeof email !== "string") {
            res.statusCode = 422
            throw new Error("This email must be a string!")
        }

        if (typeof id !== "number") {
            res.statusCode = 422
            throw new Error("This ID must be a number!")
        }

        const findiEmail = users.findIndex(user => user.email === email)

        if (findiEmail < 0) {
            res.statusCode = 400
            throw new Error("Email already registered!")
        }

        const userIndex = users.findIndex(user => user.id === id)

        if (userIndex < 0) {
            res.statusCode = 422
            throw new Error("User ID doesn't exist! Try again.")
        }
        users[userIndex].email = email
        res.status(200).send({ message: "Email actualized!", user: users[userIndex] })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})

//5
app.delete("/users/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (!id) {
            res.statusCode = 400
            throw new Error("User ID doesn't exist!")
        }

        const i = users.findIndex(user => user.id === id)
        users.splice(i, 1)

        res.status(201).send({ message: "User successfully deleted!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})