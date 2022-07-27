import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames";
import { Purchase } from "../models/Purchase";

export const newPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.body.user_id as string
        const product_id = req.body.product_id as string
        const quantity = Number(req.body.quantity)

        if(!user_id || !product_id || !quantity || user_id === "" || product_id === ""){
            errorCode = 422
            throw new Error(`Some property is empty, please enter it!`)
        }

        if(typeof user_id !== "string" || typeof product_id !== "string"){
            errorCode = 422
            throw new Error(`The User ID and/or Product ID property must be of type string!`)
        }

        if(quantity <= 0 || typeof quantity !== "number"){
            errorCode = 422
            throw new Error(`Quantity must be greater than zero and a number!`)
        }

        const checkProduct = await connection(TABLE_PRODUCTS)
            .select()
            .where("id", "=", `${product_id}`);
        if(!checkProduct[0]){
            errorCode =  404
            throw new Error(`Product not found!`)
        }
        const total_price = checkProduct[0].price * quantity

        const newId = await connection(TABLE_PURCHASES)
            .select("*")
        console.log(newId)
        const lastUser = newId[newId.length - 1]
        const lastId = Number(lastUser.id)
        const newPurchase: Purchase = {
            id: (lastId + 1).toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        }

        await connection(TABLE_PURCHASES)
        .insert({
            id: newPurchase.id,
            user_id: newPurchase.user_id,
            product_id: newPurchase.product_id,
            quantity: newPurchase.quantity,
            total_price: newPurchase.total_price
        })
        res.status(200).send({ product: newPurchase, message: "Purchase created!" })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}