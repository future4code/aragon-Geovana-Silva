import { PostBusiness } from "../../src/business/PostBusiness"
import { IGetPostsInputDTO } from "../../src/models/Post"
import { PostDataBaseMock } from "../mocks/PostDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

describe("testando o create post", () => {
    const postBusiness = new PostBusiness(
        new PostDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("posts", async () => {
        const input: IGetPostsInputDTO = {
            
        }
    })
})
