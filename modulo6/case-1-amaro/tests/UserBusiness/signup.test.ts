import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
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

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Successfully registered")
        expect(response.token).toEqual("token-mock")
    })

    test("deve retornar erro caso o nome seja uma string vazia", async () => {
        expect.assertions(2)
        
        try {
            const input: ISignupInputDTO = {
                name: "",
                email: "alice@gmail.com",
                password: "alice99"
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'name' parameter: minimum 3 characters")
            }
        }
    })

    test("deve retornar erro caso o password seja uma string vazia", async () => {
        expect.assertions(2)
        
        try {
            const input: ISignupInputDTO = {
                name: "alice",
                email: "alice@gmail.com",
                password: ""
            }

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'password' parameter: minimum 6 characters")
            }
        }
    })

    test("deve retornar erro caso o nome não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: undefined,
                email: "alice@gmail.com",
                password: "alice99"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'name' parameter: must be a string")
            }
        }
    })

    test("deve retornar erro caso o email não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "alice",
                email: undefined,
                password: "alice99"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'email' parameter: must be a string")
            }
        }
    })

    test("deve retornar erro caso o password não seja uma string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "alice",
                email: "alice@gmail.com",
                password: undefined
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Invalid 'password' parameter: must be a string")
            }
        }
    })

    test("erro ao se cadastrar com email já registrado", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "astrodev",
                email: "astrodev@gmail.com",
                password: "bananinha"
            }
    
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("E-mail already registered")
                expect(error.statusCode).toEqual(409)
            }
        }
    })

    test("erro ao se cadastrar com uma senha menor que 6 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "alice",
                email: "alice@gmail.com",
                password: "abc12"
            }
    
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Invalid 'password' parameter: minimum 6 characters")
                expect(error.statusCode).toEqual(400)
            }
        }
    })

    test("erro ao se cadastrar com uma name menor que 3 caracteres", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "al",
                email: "alice@gmail.com",
                password: "alice99"
            }
    
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Invalid 'name' parameter: minimum 3 characters")
                expect(error.statusCode).toEqual(400)
            }
        }
    })
})