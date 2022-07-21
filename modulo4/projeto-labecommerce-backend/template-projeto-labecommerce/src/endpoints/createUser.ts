import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email as string
        const password =  req.body.password as string

        if(!email || !password || email === "" || password === ""){
            errorCode = 422
            throw new Error(`Some property is empty, please enter it!`)
        }

        if(typeof email !== "string" || typeof password !== "string"){
            errorCode = 422
            throw new Error(`The email and/or password property must be of type string!`)
        }

        const newId = await connection(TABLE_USERS)
            .select("*")
        console.log(newId)
        const lastUser = newId[newId.length - 1]
        const lastId = Number(lastUser.id)
        const newUser: User = {
            id: (lastId + 1).toString(),
            email: email,
            password: password
        }

        await connection(TABLE_USERS)
        .insert({
            id: newUser.id,
            email: newUser.email,
            password: newUser.password
        })
        res.status(200).send({ product: newUser, message: "User created!" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}