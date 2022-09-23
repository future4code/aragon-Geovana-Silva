import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Login successfully")
        expect(response.token).toEqual("token-astrodev")
    })

    test("deve retornar erro caso a senha seja inválida", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "bnanainha"
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Incorrect password")
            }
        }
    })

    test("Erro ao se logar com um email não cadastrado", async () => {
        expect.assertions(2)
        try {
            const input: ILoginInputDTO = {
                email: "alice@gmail.com",
                password: "alice99"
            }
    
            await userBusiness.login(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Email not registered")
                expect(error.statusCode).toEqual(404)
            }
        }
    })

    test("erro ao se logar com uma senha menor que 6 caracteres", async () => {
        try {
            const input: ILoginInputDTO = {
                email: "alice@gmail.com",
                password: "abc12"
            }
    
            await userBusiness.login(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Invalid 'password' parameter: minimum 6 characters")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("deve retornar erro caso o password não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                email: "alice@gmail.com",
                password: undefined
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'password' parameter: must be a string")
            }
        }
    })

    test("deve retornar erro caso o email não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                email: undefined,
                password: "alice99"
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'email' parameter: must be a string")
            }
        }
    })

    test("deve retornar erro caso o password seja uma string vazia", async () => {
        expect.assertions(2)
        
        try {
            const input: ILoginInputDTO = {
                email: "alice@gmail.com",
                password: ""
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'password' parameter: minimum 6 characters")
            }
        }
    })
})