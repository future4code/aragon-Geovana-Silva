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

    }

    public getLikes = async (postId: string) => {

    }

    public findPostById = async (postId: string) => {

    }

    public deletePost = async (postId: string) => {

    }

    public findLike = async (postId: string, userId: string) => {

    }

    public addLike = async (likeDB: ILikeDB) => {

    }

    public removeLike = async (postId: string, userId: string) => {

    }
}