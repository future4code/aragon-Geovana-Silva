import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const putProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id as string
        const price = Number(req.body.price)

        if(!id || id === "" || !price){
            errorCode = 400
            throw new Error(`Property doesn't exist! Please, inform it!`)
        }

        if(typeof id !== "string"){
            errorCode = 400
            throw new Error(`ID must be a string!`)
        }

        const [findId] = await connection.raw(`
            SELECT * FROM ${TABLE_PRODUCTS}
            WHERE id = "${id}";
        `)

        if(!findId[0]){
            errorCode = 400
            throw new Error(`Product not found!`)
        }

        if(typeof price !== "number" || price <=0 ){
            errorCode = 400
            throw new Error(`Price must be a number and > 0!`)
        }

        await connection.raw(`
            UPDATE ${TABLE_PRODUCTS}
            SET price = ${price}
            WHERE id = "${id}";
        `)

        const [result] = await connection.raw(`
            SELECT * FROM ${TABLE_PRODUCTS}
            WHERE id = "${id}";
        `)
        return res.status(200).send({ message: "Product price is updated!", product: result })
        
    } catch (err) {
        res.status(errorCode).send({ message: err.message })
    }
}