import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const search = req.query.search as string
            const sort = req.query.sort || "update_at" as string
            const order = req.query.order || "asc" as string
            const limit = Number(req.query.limit) || 10 
            const page = Number(req.query.page) || 1
            const offset = limit * (page -1)

            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            if (typeof search !== "string") {
                throw new Error("Parâmetro 'search' deve ser uma string")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes()

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })
            
            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id as string

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload){
                errorCode = 401
                throw new Error(`Token required!`)
            }

            const recipeDatabase = new RecipeDatabase()
            const isUserExists = await recipeDatabase.checkExistsId(payload.id)

            if (!isUserExists) {
                errorCode = 401
                throw new Error("Invalid token!")
            }

            if(payload.role !== USER_ROLES.ADMIN){
                const recipeDatabase = new RecipeDatabase()
                const recipesDB = await recipeDatabase.checkRecipesByCreators(payload.id)
                if(!recipesDB){
                    errorCode = 401
                    throw new Error("Id doesn't create for you")
                } else {
                    await recipeDatabase.deleteRecipes(id)
                    res.status(200).send({
                        message: "Recipe deleted!"
                    })
                }
            }

            await recipeDatabase.deleteRecipes(id)
            res.status(200).send({
                message: "Recipe deleted!"
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }   
}