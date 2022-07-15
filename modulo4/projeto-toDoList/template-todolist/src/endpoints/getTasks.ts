import { Request, Response } from "express"
import connection from "../database/connection"

export const getTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const search = req.query.search as string
        console.log(search)

        if(search){
            const [resultado] = await connection.raw(`
                SELECT * FROM Tasks
                WHERE LOWER(title) LIKE "%${search.toLowerCase()}%";
            `);
            return res.status(200).send({ users: resultado })
        }

        if(!search || search === ""){
        const [resultado1] = await connection.raw(`
            SELECT * FROM Tasks;
        `)
        return res.status(200).send({ users: resultado1 })
        }

    } catch (err) {
        res.status(errorCode).send({ message: err.message })
    }
}