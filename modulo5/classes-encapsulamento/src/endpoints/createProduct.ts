import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price || name === "") {
            throw new Error("Body inválido.")
        }

        if (price <= 0){ 
            throw new Error("Preço deve ser maior que zero!")
        }

        const newId = await connection(TABLE_PRODUCTS)
            .select("*")
        const lastUser = newId[newId.length - 1]
        const lastId = Number(lastUser.id)

        const product: Product = (
            (lastId + 1).toString,
            name,
            price
        )

        await connection(TABLE_PRODUCTS).insert({
            id: product.getId,
            name: product.getName,
            price: product.getPrice
        })
        
        res.status(201).send({ message: "Produto criado", product: product })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}