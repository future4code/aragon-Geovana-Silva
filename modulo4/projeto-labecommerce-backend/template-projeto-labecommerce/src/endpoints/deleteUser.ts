import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

export const deleteUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id as string

        if(!id || id === ""){
            errorCode = 422
            throw new Error(`ID doesn't exist! Please, inform it!`)
        }

        if(typeof id !== "string"){
            errorCode = 422
            throw new Error(`ID must be a string!`)
        }

        const findId = await connection(TABLE_USERS)
            .select()
            .where({id})

        if (findId.length === 0) {
            errorCode = 404
            throw new Error("User not found!")
        }

        await connection(TABLE_USERS)
            .delete()
            .where({id})
    res.status(200).send({ message: "User deleted!" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

