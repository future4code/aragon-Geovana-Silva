import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
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
            const id = req.params.id

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload){
                errorCode = 401
                throw new Error(`Token required!`)
            }

            const recipeDatabase = new RecipeDatabase()
            const isRecipeExists = await recipeDatabase.checkExistsId(payload.id)
            const isIdExists = await recipeDatabase.checkExistsId(id)

            if (!isRecipeExists) {
                errorCode = 401
                throw new Error("Invalid token!")
            }

            if (!isIdExists) {
                errorCode = 401
                throw new Error(`Doesn't exist ID.`)
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