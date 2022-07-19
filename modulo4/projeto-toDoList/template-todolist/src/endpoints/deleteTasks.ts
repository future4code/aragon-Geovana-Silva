import { Request, Response } from "express"
import connection from "../database/connection"

export const deleteTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const taskId = req.params.taskId as string

        if(!taskId || taskId === ""){
            errorCode = 422
            throw new Error(`ID not found! Please, inform ID.`)
        }

        const [tasks] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = "${taskId}";
        `)
        const findTask = tasks[0]

        if(!findTask){
            errorCode = 404
            throw new Error(`Task not found!`)
        }

        await connection.raw(`
            DELETE FROM Tasks
            WHERE id = ${taskId};
        `)

        await connection.raw(`
            DELETE FROM Responsibles
            WHERE taskId = "${taskId}";
        `)

        res.status(200).send({ message: "Task successfully deleted!! "})
    }catch(err){
        res.status(errorCode).send({ message: err.message })
    }
}