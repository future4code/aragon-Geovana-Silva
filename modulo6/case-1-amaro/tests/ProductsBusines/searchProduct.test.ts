import { ProductBusiness } from "../../src/business/ProductBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { Authenticator } from "../../src/services/Authenticator"
import { IdGenerator } from "../../src/services/IdGenerator"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

describe("testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGenerator(),
        new Authenticator()
    )

    test("searchProduct bem sucedido", async () => {
        const search = "moletom"

        const response = await productBusiness.searchProduct(search)

        expect(response.message).toEqual("Here's the product!")
        expect(response.products).toEqual([
            {
                "id": "8309",
                "name": "VESTIDO MOLETOM COM CAPUZ"
            },
            {
                "id": "8367",
                "name": "VESTIDO MOLETOM COM CAPUZ MESCLA"
            }
        ])
    })

    test (`retorna erro caso o campo de busca esteja vazio`, async () => {
        try {
            const search = ""

            await productBusiness.searchProduct(search)
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Type in the search which product you want to search")
            }
        }
    })
}) 