import { ILikeDB, IPostDB, Post } from "../../src/models/Post"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PostDataBaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post): IPostDB => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post) => {
        
    }

    public getPosts = async () => {
        const postsDB: IPostDB[] = [
            {
                id: "201",
                content: "Olá, sou novo por aqui!",
                user_id: "101"
            },
            {
                id: "202",
                content: "Bom dia, família!",
                user_id: "102"
            },
            {
                id: "203",
                content: "Receba!",
                user_id: "103"
            }
        ]
        return postsDB
    }

    public getLikes = async (postId: string) => {
        switch (postId) {
            case "201":
                return 3
            default:
                return 0
        }
    }

    public findPostById = async (postId: string) => {
        switch (postId) {
            case "201":
                return {
                    id: "201",
                    content: "Olá, sou novo por aqui!",
                    user_id: "101"
                } as IPostDB
            default:
                return undefined
        }
    }

    public deletePost = async (postId: string) => {

    }

    public findLike = async (postId: string, userId: string) => {
        switch (postId) {
            case "201":
                return userId === "101" ? {
                                id: "301",
                                post_id: "201",
                                user_id: "101"
                            } as ILikeDB: undefined
            default:
                return undefined
        }
    }

    public addLike = async (likeDB: ILikeDB) => {

    }

    public removeLike = async (postId: string, userId: string) => {

    }
}