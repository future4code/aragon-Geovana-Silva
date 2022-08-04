import { IRecipeDB } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public getAllRecipes = async () => {
        const recipesDB: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
        
        return recipesDB
    }

    public checkRecipesByCreators = async (id: string) => {
        const recipesDB: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select(`creator_id`)
            .where ({ id })
        return recipesDB
    }

    public checkExistsId = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })
        return result[0] ? true : false
    }

    public deleteRecipes = async (id: string) => {
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .delete()
        .where({ id })
    }
}