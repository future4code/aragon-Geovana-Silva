import { Request, Response } from "express"
import connection from "../database/connection"

export const getUsersForTasks = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const taskId = req.params.taskId as string

        if(!taskId || taskId === ""){
            errorCode = 422
            throw new Error(`ID not found! Please, inform ID.`)
        }

        const [whereTaskId] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = "${taskId}";
        `)
        if(!whereTaskId[0]){
            errorCode = 404
            throw new Error(`Task not found!`)
        }

        const [userForTask] = await connection.raw(`
            SELECT id, nickname FROM Users
            JOIN Responsibles
            ON Responsibles.userId = Users.id
            WHERE Responsibles.taskId = "${taskId}"; 
        `)

        return res.status(200).send({ users: userForTask })
    }catch(err){
        res.status(errorCode).send({ message: err.message })
    }
}