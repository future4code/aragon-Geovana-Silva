import { ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }
    //ERRO NO INPUT

    public getPosts = async () => {
        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
                // Labook_Posts.id AS postId,
                // Labook_Users.id AD userId,
                // Labook_Posts.content,
                // Labook_Users.email,
                // COUNT (Labook_Likes.id) AS likes
                // FROM Labook_Posts
                // JOIN Labook_Users
                // ON Labook_Posts.user_id = Labook_Users.id
                // JOIN Labook_Likes
                // ON Labook_Likes.post_id = Labook_Posts.id
                // GROUP BY postId, userId;
        return postsDB
    }
    //NÃO CONSIGO USAR O JOIN

    public deletePosts = async (id: string) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id })
    }

    public findPostById = async (id: string) => {
        const postDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id })
        return postDB[0]
    }

    public findLikePost = async (post_id: string, user_id: string) => {
        const postLikeDB: ILikeDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .where(`post_id`, `=`, `${post_id}`)
            .andWhere(`user_id`, `=`, `${user_id}`)
        return postLikeDB[0]
    }
}