import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const updatePerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id as string
        const price = Number(req.body.price)

        if(!id || id === "" || !price){
            errorCode = 400
            throw new Error(`Alguma propriedade não existe! Por favor, informe-a!`)
        }

        if(typeof id !== "string"){
            errorCode = 400
            throw new Error(`Id precisa ser do tipo string!`)
        }

        const [findId] = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

            if (findId.length === 0) {
                errorCode = 404
                throw new Error("Perfume não encontrado.")
            }

        if(typeof price !== "number" || price <=0 ){
            errorCode = 400
            throw new Error(`Preço precisa ser do tipo number e/ou ser > 0!`)
        }

        await connection(TABLE_PERFUMES)
            .update({
                price: price
            })
            .where({
                id: id
            })
    
        const [result] = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "LIKE", `${id}`)
            res.status(200).send({ message: "Preço do perfume editado com sucesso.", perfume: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}