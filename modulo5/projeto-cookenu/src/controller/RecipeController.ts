import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            // const search = req.query.search as string
            // const sort = req.query.sort || "update_at" as string
            // const order = req.query.order || "asc" as string
            // const limit = Number(req.query.limit) || 10 
            // const page = Number(req.query.page) || 1
            // const offset = limit * (page -1)

            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            // if (typeof search !== "string") {
            //     throw new Error("Parâmetro 'search' deve ser uma string")
            // }

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

    public createRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const title = req.body.title
            const description = req.body.description
            const creator_id = req.body.creator_id

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const isUserExists = await recipeDatabase.checkExistsId(payload.id)

            if (!isUserExists) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if(!title || !description || !creator_id || title === "" || description === "" || creator_id === ""){
                errorCode = 422
                throw new Error(`Params required!`)
            }

            if(typeof title !== "string" || typeof description !== "string" || typeof creator_id !== "string"){
                errorCode = 422
                throw new Error(`Params must be a string!`)
            }

            if(title.length < 3){
                errorCode = 422
                throw new Error(`Title must be > 3`)
            }

            if(description.length < 10){
                errorCode = 422
                throw new Error(`Description must be > 10`)
            }
            
            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            let data = new Date();
            // let day = String(data.getDate()).padStart(2, '0')
            // let month = String(data.getMonth() + 1).padStart(2, '0')
            // let year = data.getFullYear()

            const created_at = data
            const updated_at = data

            const recipe = new Recipe (
                id,
                title,
                description,
                created_at,
                updated_at,
                creator_id
            )

            const userDatabase = new RecipeDatabase()
            await userDatabase.createRecipes(recipe)

            res.status(201).send({
                message: "Recipe created!",
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public updateRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const title = req.body.title
            const description = req.body.description
            const id = req.params.id

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const isUserExists = await recipeDatabase.checkExistsId(payload.id)
            const isIdExists = await recipeDatabase.checkExistsId(id)

            if (!isUserExists) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if (!isIdExists) {
                errorCode = 401
                throw new Error(`Id inexistente.`)
            }

            let data = new Date();
            const updated_at = data

            if (payload.role !== USER_ROLES.ADMIN) {
                if (id === payload.id) {
                    const recipeDB = await recipeDatabase.findById(payload.id)

                    const recipe = new Recipe(
                        recipeDB.id,
                        recipeDB.title,
                        recipeDB.description,
                        recipeDB.created_at,
                        recipeDB.updated_at,
                        recipeDB.creator_id
                    )

                    title && recipe.setTitle(title)
                    description && recipe.setDescription(description)
                    updated_at && recipe.setUpdatedAt(updated_at)

                    await recipeDatabase.updateRecipe(recipe)
                    res.status(201).send({ 
                        message: "Updated!",
                        recipe
                    })
                } else {
                    errorCode = 401
                    throw new Error(`Não é a sua Id`)
                }
            }
            
            // if(!title || !description || !creator_id || title === "" || description === "" || creator_id === ""){
            //     errorCode = 422
            //     throw new Error(`Params required!`)
            // }

            // if(typeof title !== "string" || typeof description !== "string" || typeof creator_id !== "string"){
            //     errorCode = 422
            //     throw new Error(`Params must be a string!`)
            // }

            // if(title.length < 3){
            //     errorCode = 422
            //     throw new Error(`Title must be > 3`)
            // }

            // if(description.length < 10){
            //     errorCode = 422
            //     throw new Error(`Description must be > 10`)
            // }
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public deleteRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const id = req.params.id as string
            const token = req.headers.authorization
            
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
                throw new Error("Token inválido")
            }

            if (!id || id === "") {
                errorCode = 401
                throw new Error(`Id required!`)
            }

            if (typeof id !== "string") {
                errorCode = 422
                throw new Error(`Id must be a string!`)
            }

            if (payload.role !== USER_ROLES.ADMIN) {
                if (id === payload.id) {
                    await recipeDatabase.deleteRecipes(id)
                    res.status(200).send({
                        message: "Recipe deleted!"
                    })
                } else {
                    errorCode = 401
                    throw new Error("Id doesn't created for you")
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