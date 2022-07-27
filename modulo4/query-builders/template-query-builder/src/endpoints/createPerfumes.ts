import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

export const createPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name as string
        const brand = req.body.brand as string
        const price = Number(req.body.price)
        const ml = Number(req.body.ml)

        if(!name || !brand || !price || !ml || name === "" || brand === ""){
            errorCode = 422
            throw new Error(`Alguma propriedade está vazia, por favor informe-a!`)
        }

        if(typeof name !== "string" || typeof brand !== "string"){
            errorCode = 422
            throw new Error(`A propriedade name e/ou brand precisa ser do tipo string!`)
        }

        if(typeof price !== "number" || typeof ml !== "number"){
            errorCode = 422
            throw new Error(`A propriedade price e/ou ml precisa ser do tipo number!`)
        }

        if(price <= 0 || ml <= 0){
            errorCode = 422
            throw new Error(`A propriedade price e/ou ml precisa ser maior que 0!`)
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml
        }

        await connection(TABLE_PERFUMES)
        .insert({
            id: newPerfume.id,
            name: newPerfume.name,
            brand: newPerfume.brand,
            price: newPerfume.price,
            ml: newPerfume.ml
        })
        res.status(200).send({ product: newPerfume, message: "Perfume criado com sucesso!" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

