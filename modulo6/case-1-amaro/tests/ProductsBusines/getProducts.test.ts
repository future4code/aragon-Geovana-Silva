import { ProductBusiness } from "../../src/business/ProductBusiness"
import { IGetProductsInputDBTO } from "../../src/models/Products"
import { Authenticator } from "../../src/services/Authenticator"
import { IdGenerator } from "../../src/services/IdGenerator"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"


describe(`testando productBusiness`, () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGenerator(),
        new Authenticator()
    )

    test(`getProducts bem sucedido`, async () => {
        const input: IGetProductsInputDBTO = {
            order: "name",
            sort: "ASC",
            limit: "10",
            page: "1"
        }

        const response = await productBusiness.getProducts(input)
        expect(response.product).toEqual([
            {
                "id": "8104",
                "name": "VESTIDO BABADO TURTLENECK",
                "tags": []
            },
            {
                "id": "8109",
                "name": "VESTIDO BABADOS HORIZONTAIS",
                "tags": []
            },
            {
                "id": "8119",
                "name": "VESTIDO BABADOS KNIT",
                "tags": []
            },
            {
                "id": "7518",
                "name": "VESTIDO CAMISETA FANCY",
                "tags": []
            },
            {
                "id": "7533",
                "name": "VESTIDO COTTON DOUBLE",
                "tags": []
            },
            {
                "id": "8363",
                "name": "VESTIDO CURTO MANGA LONGA LUREX",
                "tags": [
                    "colorido",
                    "metal",
                    "delicado",
                    "estampas",
                    "passeio"
                ]
            },
            {
                "id": "8310",
                "name": "VESTIDO CURTO PONTO ROMA MANGA",
                "tags": [
                    "casual",
                    "metal",
                    "delicado",
                    "descolado",
                    "elastano",
                    "estampas"
                ]
            },
            {
                "id": "8080",
                "name": "VESTIDO CURTO RENDA VISCOSE",
                "tags": []
            },
            {
                "id": "8264",
                "name": "VESTIDO CURTO VELUDO CRISTAL",
                "tags": []
            },
            {
                "id": "8293",
                "name": "VESTIDO CURTO VELUDO RECORTE GOLA",
                "tags": []
            }
        ])
    })
})