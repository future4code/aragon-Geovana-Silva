import { ICreateTagInputDTO, IGetProductsDB, IProductDB, ITagsDB, Product } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS =  "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"

    public getProducts = async (input: IGetProductsDB): Promise<IProductDB[] | undefined> => {
        const {
            order,
            sort,
            limit,
            offset
        } = input

        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        return result
    }

    public getTags = async (id: string): Promise<IProductDB | undefined> => {
        const result: IProductDB[] = await BaseDatabase.connection.raw(`
            SELECT Amaro_Tags.tag
            FROM Amaro_Tags
            JOIN Amaro_Tags_Products
            ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
            WHERE Amaro_Tags_Products.product_id = "${id}";
        `)
        return result[0]
    }

    public searchProduct = async (search: string): Promise <IProductDB[] | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where(`name`, `LIKE`, `%${search}%`)
            .orWhere(`id`, `LIKE`, `%${search}%`)
        return result
    }

    public createProduct = async (input: IProductDB): Promise<void> => {
        const {id, name} = input

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert({id, name})
    }

    public createTag = async (input: ICreateTagInputDTO): Promise<void> => {
        const {id, product_id, tag_id} = input

        await BaseDatabase
            .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
            .insert({id, product_id, tag_id})
    }

    public getProductById = async (id: string): Promise <IProductDB | undefined> => {
        const [result] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where(`id`, `=`, `${id}`)
        return result
    }
}