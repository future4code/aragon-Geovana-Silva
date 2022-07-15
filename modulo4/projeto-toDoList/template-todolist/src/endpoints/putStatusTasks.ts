import { Request, Response } from "express"
import connection from "../database/connection"

export const putStatusTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const taskId = req.params.taskId as string
        const status = req.body.status

        if(!taskId || taskId === ""){
            errorCode = 422
            throw new Error(`ID doesn't exist! Please, inform it!`)
        }
        const [findId] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = "${taskId}";
        `)
        const findUserId = findId[0]
        if(!findUserId){
            errorCode = 404
            throw new Error(`Task not found!`)
        }

        if(status !== "A FAZER" || status !== "FAZENDO" || status !== "FEITO"){
            errorCode = 422
            throw new Error(`Status must be a "A FAZER" || "FAZENDO" || "FEITO"`)
        }
        if(typeof status !== "string"){
            errorCode = 422
            throw new Error(`Status must be a string!`)
        }
        if(!status || status === ""){
            errorCode = 422
            throw new Error(`Status doesn't exist!`)
        }

        await connection.raw(`
            UPDATE Tasks
            SET status = ${status}
            WHERE id = "${taskId}";
        `)

    }catch(err){
        res.status(errorCode).send({ message: err.message })
    }
}