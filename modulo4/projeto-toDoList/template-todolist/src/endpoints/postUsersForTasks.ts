import { Request, Response } from "express"
import connection from "../database/connection"

export const postUsersForTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const taskId = req.params.taskId

        if(!taskId || taskId === ""){
            errorCode = 422
            throw new Error(`ID doesn't exist! Please, inform ID.`)
        }

        const [whereId] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = ${taskId};
        `)
        if(!whereId[0]){
            errorCode = 422
            throw new Error(`Task not found!`)
        }


    }catch(err){
        res.status(errorCode).send({ message: err.message })
    }
}