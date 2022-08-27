import { ProductDatabase } from "../database/ProductDatabase";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { IGetProductsDB, IGetProductsInputDBTO, IGetProductsOutput, IProductDB, Product } from "../models/Products";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public getProducts = async (input: IGetProductsInputDBTO): Promise<IGetProductsOutput> => {

        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)

        const getProductsInput: IGetProductsDB = {
            order,
            sort,
            limit,
            page,
            offset
        }

        const productDB: IProductDB[] = await this.productDatabase.getProducts(getProductsInput)

        const products = productDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {
            const id = product.getId()
            const tags: string[] = []
            const tagsDB: any = await this.productDatabase.getTags(id)
            for (let tag of tagsDB) {
                tags.push(tag.tag)
            }
            product.setTags(tags)
        }

        const response: IGetProductsOutput = {
            product: products
        }

        return response
    }

    // public createProduct = async (input: ICreateProductInputDTO): Promise<ICreateProductOutputDTO> => {
    //     const {token, name, tags} = input

    //     if (!token) {
    //         throw new UnauthorizedError("Invalid or missing token")
    //     }

    //     const payload = this.authenticator.getTokenPayload(token)
    // }
}