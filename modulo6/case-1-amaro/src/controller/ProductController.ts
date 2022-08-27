import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { Request, Response } from "express";
import { IGetProductsInputDBTO } from "../models/Products";


export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

        public getProducts = async (req: Request, res: Response) => {
            try {
                const input: IGetProductsInputDBTO = {
                    order: req.query.order as string,
                    sort: req.query.sort as string,
                    limit: req.query.limit as string,
                    page: req.query.page as string
                }

                const response = await this.productBusiness.getProducts(input)
                res.status(200).send(response)
            } catch (error: unknown) {
                if (error instanceof BaseError) {
                    return res.status(error.statusCode).send({ message: error.message })
                }
                res.status(500).send({ message: "Unexpected error fetching products" })
        }
    }
}