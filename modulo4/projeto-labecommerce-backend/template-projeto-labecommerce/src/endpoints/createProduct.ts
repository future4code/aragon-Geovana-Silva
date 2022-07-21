import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name =  req.body.name as string
        const price = Number(req.body.price)

        if(!name || !price || name === ""){
            errorCode = 422
            throw new Error(`Some property is empty, please enter it!`)
        }

        if(typeof name !== "string"){
            errorCode = 422
            throw new Error(`Name must be a string!`)
        }

        if(typeof price !== "number"){
            errorCode = 422
            throw new Error(`Price must be a number!`)
        }

        if(price <= 0){
            errorCode = 422
            throw new Error(`Price must be greater than zero!`)
        }

        const newId = await connection(TABLE_PRODUCTS)
            .select("*")
        console.log(newId)
        const lastUser = newId[newId.length - 1]
        const lastId = Number(lastUser.id)
        const newProduct: Product = {
            id: (lastId + 1).toString(),
            name: name,
            price: price
        }

        await connection(TABLE_PRODUCTS)
        .insert({
            id: newProduct.id,
            name: newProduct.name,
            price: newProduct.price
        })
        res.status(200).send({ product: newProduct, message: "Product created!" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}