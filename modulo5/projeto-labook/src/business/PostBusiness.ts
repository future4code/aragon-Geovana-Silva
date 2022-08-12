import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IGetPostsOutputDTO, IGetPostsPost, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const {token, content} = input

        if (!token|| token === "") {
            throw new Error("Token faltando")
        }

        if (!content || content === "") {
            throw new Error("Parâmetro 'content' faltando")
        }

        if(typeof content !== "string" || content.length < 1){
            throw new Error("Parâmetro 'content' deve ser do tipo string e conter acima de 1 caractere.")
        }

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso!",
        }
        return response
    }

    public getPosts = async (input: IGetPostsInputDTO) => {
        const token = input.token

        if (!token|| token === "") {
            throw new Error("Token faltando")
        }

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const postDB = await this.postDatabase.getPosts()

        const posts = postDB.map(postDB => {
            const post = new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )

            const postResponse: IGetPostsPost = {
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId(),
                likes: post.getLikes()
            }
            return postResponse
        })

        const response: IGetPostsOutputDTO = {
            posts
        }
        return response
    }

    public deletePosts = async (input: IDeletePostInputDTO) => {
        const {token, id} = input

        const payload = this.authenticator.getTokenPayload(token)
        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
                const userDB = await this.postDatabase.findPostById(payload.id)
                if(!userDB){
                    throw new Error(`Não pode deletar outra conta sem ser a sua conta.`)
                } else {
                    await this.postDatabase.deletePosts(id)

                    const response = {
                        message: "Post deletado com sucesso!",
                    }
                    return response
                }
        } else {
            await this.postDatabase.deletePosts(id)

            const response = {
                message: "Post deletado com sucesso"
            }
            return response
        }
    }

    // public likePost = async (input: ) => {

    // }
}