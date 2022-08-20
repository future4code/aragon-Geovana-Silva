import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ICreateShowInputDTO } from "../../src/models/Show"
import { BaseError } from "../../src/errors/BaseError"
import { ShowDatabase } from "../../src/database/ShowDatabase"

describe("testando o show business", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("create show bem sucedido", async ()=> {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            band: "banda-mock",
            starts_at: "2022/12/08"
        }

        const response = await showBusiness.createShow(input)
        expect(response.message).toEqual("Show criado com sucesso!")
    })

    test("deve retornar erro, caso o token seja inválido", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-fake",
                band: "band-mock",
                starts_at: "2022/12/08"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Token inválido ou faltando")
            }
        }
    })

    test("deve retornar erro, caso a data seja inferior a data do evento", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-astrodev",
                band: "band-mock",
                starts_at: "2022/12/04"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Data inferior ao início do evento")
            }
        }
    })

    test("deve retornar erro, caso a data seja superior ao limite do evento", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-astrodev",
                band: "band-mock",
                starts_at: "2022/12/12"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Data superior ao limite do evento")
            }
        }
    })

    test("deve retornar erro, o user_role for normal", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-mock",
                band: "band-mock",
                starts_at: "2022/12/12"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(403)
                expect(error.message).toEqual("Usuário cadastrado, mas sem permissão")
            }
        }
    })

    test("deve retornar erro, caso exista o show marcada na data", async () => {
        expect.assertions(2)

        try {
            const input: ICreateShowInputDTO = {
                token: "token-astrodev",
                band: "band-mock",
                starts_at: "2022/12/05"
            }

            await showBusiness.createShow(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("O show já existe")
            }
        }
    })
})