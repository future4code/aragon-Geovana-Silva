import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, ILikePostInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
    
    public createPost = async (req: Request, res: Response) => {
        try {
            const input: ICreatePostInputDTO = {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: IGetPostsInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.postBusiness.getPosts(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deletePosts = async (req: Request, res: Response) => {
        try {
            const input: IDeletePostInputDTO = {
                id: req.params.id,
                token: req.headers.authorization
            }

            const response = await this.postBusiness.deletePosts(input)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public likePost = async (req: Request, res: Response) => {
        try {
            const input: ILikePostInputDTO = {
                token: req.headers.authorization,
                post_id: req.body.post_id
            }

            const response = await this.postBusiness.likePost(input)
            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}   