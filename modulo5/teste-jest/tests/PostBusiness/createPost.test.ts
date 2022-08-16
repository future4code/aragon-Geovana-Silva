import { PostBusiness } from "../../src/business/PostBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ICreatePostInputDTO } from "../../src/models/Post"
import { PostDataBaseMock } from "../mocks/PostDatabaseMock"

describe("testando o create post", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("post criado com sucesso", async () => {
        const input: ICreatePostInputDTO = {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2MDM5Mzk2MSwiZXhwIjoxNjYwNDgwMzYxfQ.FwOtXHKx1XXFnMot-CJstZPCzEORAtPrwd3iz8QAg5A",
            content: "Hello world!"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toEqual("post criado com sucesso")
        expect(response.token).toEqual("token-astrodev")
    })
})