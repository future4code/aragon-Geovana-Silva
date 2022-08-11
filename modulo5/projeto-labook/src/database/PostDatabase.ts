import { IPostDB, Post } from "../models/Post"
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

    public getPosts = async (
        search: string,
    ) => {
        if(!search){
            const postsDB: IPostDB[] = await BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .select()
            return postsDB
        }

        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where(`content`, `LIKE`, `%${search}%`)
        return postsDB
    }
}