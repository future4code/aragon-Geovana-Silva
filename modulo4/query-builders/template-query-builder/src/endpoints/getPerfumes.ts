import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const getPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.query.name
        const brand = req.query.brand
        const sort = req.query.sort || "name"
        const order = req.query.order || "asc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if (name || brand) {
            const result = await connection(TABLE_PERFUMES)
                    .select()
                    .where("name", "LIKE", `%${name}%`)
                    .orWhere("brand", "LIKE", `%${brand}%`)
                    .orderBy(`${sort}`, `${order}`)
                    .limit(limit)
                    .offset(offset)
                
                return res.status(200).send({ users: result })
            }

        const result = await connection(TABLE_PERFUMES)
            .select("*")
            .orderBy(`${sort}`, `${order}`)
            .limit(limit)
            .offset(offset)
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}