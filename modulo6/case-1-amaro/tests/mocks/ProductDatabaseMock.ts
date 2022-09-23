import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ICreateTagInputDTO, IGetProductsDB, IProductDB } from "../../src/models/Products";

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"

    public getProducts = async (input: IGetProductsDB): Promise<IProductDB[] | undefined> => {
        return [
            {
                id: "8371",
                name: "VESTIDO TRICOT CHEVRON"
            },
            {
                id: "8367",
                name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
            },
            {
                id: "8363",
                name: "VESTIDO CURTO MANGA LONGA LUREX"
            },
            {
                id: "8360",
                name: "VESTIDO FEMININO CANELADO"
            },
            {
                id: "8358",
                name: "VESTIDO REGATA FEMININO COM GOLA"
            },
            {
                id: "8314",
                name: "VESTIDO PLISSADO ACINTURADO"
            },
            {
                id: "8311",
                name: "VESTIDO SLIPDRESS CETIM"
            },
            {
                id: "8310",
                name: "VESTIDO CURTO PONTO ROMA MANGA"
            },
            {
                id: "8309",
                name: "VESTIDO MOLETOM COM CAPUZ"
            },
            {
                id: "8301",
                name: "VESTIDO LONGO CREPE MANGA COMPRIDA"
            }
        ] as IProductDB[]
    }

    public getTags = async (id: string) => {
        switch (id) {
            case "8311":
                return [
                    { tag: 'balada' },
                    { tag: 'metal' },
                    { tag: 'boho' },
                    { tag: 'descolado' },
                    { tag: 'passeio' }
                ]
            case "8310":
                return []
            default:
                return undefined
        }
    }

    public searchProduct = async (search: string): Promise <IProductDB[] | undefined> => {
        switch (search) {
            case "moletom":
                return [
                    {
                        "id": "8309",
                        "name": "VESTIDO MOLETOM COM CAPUZ"
                    },
                    {
                        "id": "8367",
                        "name": "VESTIDO MOLETOM COM CAPUZ MESCLA"
                    }
                ]
            case "8311":
                return [
                    {
                        "id": "8311",
                        "name": "VESTIDO SLIPDRESS CETIM"
                    }
                ]
            case "VESTIDO MOLETOM COM CAPUZ":
                return [
                    {
                        "id": "8309",
                        "name": "VESTIDO MOLETOM COM CAPUZ"
                    }
                ]
            default:
            return undefined
        }
    }

    public createProduct = async (input: IProductDB): Promise<void> => {

    }

    public createTag = async (input: ICreateTagInputDTO): Promise<void> => {

    }

    public getProductById = async (id: string): Promise <IProductDB | undefined> => {
        switch(id){
            case "8311":
                return {
                    "id": "8311",
                    "name": "VESTIDO SLIPDRESS CETIM"
                }
            case "8110":
                return {
                    "id": "8110",
                    "name": "VESTIDO CUT OUT TRICOT"
                }
            case "8363":
                return {
                    "id": "8363",
                    "name": "VESTIDO CURTO MANGA LONGA LUREX"
                }
            case "8314":
                return {
                    "id": "8314",
                    "name": "VESTIDO PLISSADO ACINTURADO"
                }
            default:
                return undefined
        }
    }
}
