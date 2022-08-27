import { IGetProductsDB, IProductDB, ITagsDB, Product } from "../models/Products";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS =  "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"


    public toProductDBModel = (product: Product): IProductDB => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName()
        }

        return productDB
    }

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

    public createProduct = async (product: Product): Promise<void> => {
        const productDB = this.toProductDBModel(product)

        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert(productDB)
    }

    public createTag = async (tagDB: ITagsDB): Promise<void> => {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_TAGS)
            .insert(tagDB)
    }
}