import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";

export const getPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id as string
        const sort = req.query.sort || "product_id"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if(!user_id){
            errorCode = 422
            throw new Error(`User Id doesn't exist! Please, inform it!`)
        }
        
        if(user_id){
            const result = await connection.raw(`
                SELECT
                ${TABLE_USERS}.email,
                ${TABLE_PRODUCTS}.name,
                ${TABLE_PRODUCTS}.price,
                ${TABLE_PURCHASES}.quantity,
                ${TABLE_PURCHASES}.total_price
                FROM ${TABLE_PURCHASES}
                JOIN ${TABLE_USERS}
                ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
                JOIN ${TABLE_PRODUCTS}
                ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
                WHERE ${TABLE_PURCHASES}.user_id = ${user_id};
            `)
            res.status(200).send({ users: result })
        }

        const result = await connection(TABLE_PURCHASES)
            .select("*")
            .orderBy(`${sort}`, `${order}`)
            .limit(limit)
            .offset(offset)
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}