import { Request, Response } from "express"
import connection from "../database/connection"

export const putNickName = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const userId = req.params.userId as string
        const nickname = req.body.nickname

        if(!userId || userId === ""){
            errorCode = 422
            throw new Error(`ID doesn't exist! Please, inform it!`)
        }
        const [findId] = await connection.raw(`
            SELECT * FROM Users
            WHERE id = "${userId}";
        `)
        const findUserId = findId[0]
        if(!findUserId){
            errorCode = 404
            throw new Error(`User not found!`)
        }

        if(!nickname || nickname === ""){
            errorCode = 404
            throw new Error(`Nickname doesn't exist!`)
        }
        if(typeof nickname !== "string"){
            errorCode = 404
            throw new Error(`Nickname must be a string!`)
        }
        if(nickname.length < 3){
            errorCode = 422
            throw new Error(`Nickname must be >3`)
        }

        await connection.raw(`
            UPDATE Users
            SET nickname = ${nickname}
            WHERE id = "${userId}";
        `)

        res.status(200).send({ message: "Nickname is updated!" })
    }catch(err){
        res.status(errorCode).send({ message: err.message })
    }
}