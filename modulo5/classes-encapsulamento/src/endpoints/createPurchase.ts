import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../models/Product"
import { Purchases } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity || userId === "" || productId === "") {
            throw new Error("Body inválido.")
        }

        if (quantity <=0){
            throw new Error("Quantidade deve ser maior que zero!")
        }

        const findUser = await connection(TABLE_USERS)
        .select()
        .where({ id: userId })

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await connection(TABLE_PRODUCTS)
        .select()
        .where({ id: productId })

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        const newId = await connection(TABLE_USERS)
            .select("*")
        const lastUser = newId[newId.length - 1]
        const lastId = Number(lastUser.id)

        const purchase = new Purchases (
            (lastId + 1).toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        await connection(TABLE_PURCHASES).insert({
            id: purchase.getId(),
            user_id: purchase.getUserId(),
            product_id: purchase.getProductId(),
            quantity: purchase.getQuantity(),
            total_price: purchase.getTotalPrice()
        })

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}