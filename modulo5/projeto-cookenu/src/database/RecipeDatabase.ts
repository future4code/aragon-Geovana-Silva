import { IRecipeDB, Recipe } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public getAllRecipes = async (
        // search: string,
        // sort: string,
        // order: string,
        // limit: number,
        // offset: number
    ) => {

        // if(search){
        //     const recipesDB: IRecipeDB[] = await BaseDatabase
        //         .connection(RecipeDatabase.TABLE_RECIPES)
        //         .select()
        //         .where("title", "LIKE", `%${search}`)
        //         .orderBy(sort, order)
        //         .limit(limit)
        //         .offset(offset)
        //     return recipesDB
        // }

        const recipesDB: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            // .orderBy(sort, order)
            // .limit(limit)
            // .offset(offset)
        return recipesDB
    }

    public createRecipes = async (recipe: Recipe) => {
        const result = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .insert(recipe)
        return result
    }

    // public checkRecipesByCreators = async (id: string) => {
    //     const recipesDB: IRecipeDB[] = await BaseDatabase
    //         .connection(RecipeDatabase.TABLE_RECIPES)
    //         .select(`creator_id`)
    //         .where ({ id })
    //     return recipesDB[0] ? true : false
    // }

    public checkExistsId = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })
        return result[0] ? true : false
    }

    public findById = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })
        return result[0]
    }

    public updateRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId()
        }
        await BaseDatabase
            .connection(RecipeDatabase. TABLE_RECIPES)
            .update(recipeDB)
            .where({ id: recipeDB.id })
    }

    public deleteRecipes = async (id: string) => {
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .delete()
        .where({ id })
    }
}