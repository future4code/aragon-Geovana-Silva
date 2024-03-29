import { ICreatePostDBDTO, IDislikePostDBDTO, IFindLikePostInput, ILikeDB, ILikePostInputDTO, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: ICreatePostDBDTO) => {
        const postDB: ICreatePostDBDTO = {
            id: post.id,
            content: post.content,
            user_id: post.user_id
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

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

    public findLikePost = async (input: IFindLikePostInput) => {
        const {post_id, user_id} = input
        
        const postLikeDB: ILikeDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .select()
            .where({
                post_id: post_id, 
                user_id: user_id
            })
        return postLikeDB[0]
    }

    public likePost = async (likeDB: ILikeDB) => {
        const postLikeDB: ILikeDB = {
            id: likeDB.id,
            post_id: likeDB.post_id, 
            user_id: likeDB.user_id
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .insert(postLikeDB)

        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .increment(`likes`, 1)
        //     .where(`id`, `=`, `${postLikeDB.post_id}`)
    }

    public dislikePost = async (likeDB: IDislikePostDBDTO) => {
        const dislikePostDB: IDislikePostDBDTO = {
            post_id: likeDB.post_id,
            user_id: likeDB.user_id
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .delete()
            .where({    
                post_id: dislikePostDB.post_id,
                user_id: dislikePostDB.user_id
            })
        
        // await BaseDatabase
        //     .connection(PostDatabase.TABLE_POSTS)
        //     .decrement("likes", 1)
        //     .where(`id`, `=`, `${dislikePostDB.post_id}`)
    }
}