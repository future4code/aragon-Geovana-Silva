import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ICreateProductInputDTO } from "../../src/models/Products"
import { Authenticator } from "../../src/services/Authenticator"
import { IdGenerator } from "../../src/services/IdGenerator"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"

describe(`testando productBusiness`, () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGenerator(),
        new Authenticator()
    )

    test(`createProduct bem sucedido`, async () => {
        const input: ICreateProductInputDTO = {
            token: `token-astrodev`,
            name: `Saia colegial`,
            tags: [`115`]
        }

        const response = await productBusiness.createProduct(input)

        expect(response.message).toEqual(`Product created successfully!`)
    })

    test(`retorna erro caso o usuário não esteja autenticado`, async () => {
        try {
            const input: ICreateProductInputDTO = {
                token: `fake-token`,
                name: `Saia colegial`,
                tags: [`115`]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
        expect(error.message).toEqual(`Not authenticated`)
        }
    })

    test(`retorna erro caso o usuário não esteja autenticado`, async () => {
        try {
            const input: ICreateProductInputDTO = {
                token: ``,
                name: `Saia colegial`,
                tags: [`115`]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(401)
        expect(error.message).toEqual(`Invalid or missing token`)
        }
    })

    test(`retorna erro caso o produto já exista`, async () => {
        try {
            const input = {
                token: `token-alice`,
                name: `VESTIDO MOLETOM COM CAPUZ`,
                tags: [`115`]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(409)
            expect(error.message).toEqual(`The product already exists!`)
        }
    })

    test(`retorna erro caso o name não seja string`, async () => {
        try {
            const input = {
                token: "token-alice",
                name: 1234,
                tags: ["115"]
            } as unknown as ICreateProductInputDTO

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual(`Invalid 'name' parameter: must be a string`)
        }
    })

    test(`retorna erro caso o name tenha menos que 3 caracteres`, async () => {
        try {
            const input = {
                token: "token-alice",
                name: "Al",
                tags: ["115"]
            }

            await productBusiness.createProduct(input)
        } catch (error) {
            expect(error.statusCode).toEqual(400)
            expect(error.message).toEqual(`Invalid 'name' parameter: must be at least 3 letters long`)
        }
    })
})