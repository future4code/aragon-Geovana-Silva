import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.query.email
        const sort = req.query.sort || "email"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if(email){
            const result = await connection(TABLE_USERS)
                .select()
                .where("email", "LIKE", `%${email}%`)
                .orderBy(`${sort}`, `${order}`)
                .limit(limit)
                .offset(offset)
            return res.status(200).send({ users: result })
        }

        const result = await connection(TABLE_USERS)
            .select("*")
            .orderBy(`${sort}`, `${order}`)
            .limit(limit)
            .offset(offset)
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}