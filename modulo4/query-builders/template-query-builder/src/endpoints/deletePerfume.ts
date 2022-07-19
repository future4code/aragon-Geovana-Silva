import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const deletePerfume = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id as string

        if(!id || id === ""){
            errorCode = 422
            throw new Error(`Id não existe! Por favor, informe-a!`)
        }

        if(typeof id !== "string"){
            errorCode = 422
            throw new Error(`Id precisa ser do tipo string!`)
        }
        
        const findId = await connection(TABLE_PERFUMES)
            .select()
            .where({id})

        if (findId.length === 0) {
            errorCode = 404
            throw new Error("Perfume não encontrado.")
        }

        await connection(TABLE_PERFUMES)
            .delete()
            .where({id})
        res.status(200).send({ message: "Perfume deletado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}