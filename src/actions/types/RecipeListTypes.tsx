import { RecipeObj } from '../../reducers/AppState';
import { LIST_ACTION_TYPES } from "./actionEnums";

// load all recipes from the JSON
export interface loadRecipes {
  type: typeof LIST_ACTION_TYPES.LOAD_RECIPES;
  payload: {
    Recipes: RecipeObj[];
  }
};

// add a new recipe to the applications state
export interface SaveNewRecipe {
  type: typeof LIST_ACTION_TYPES.SAVE_NEW_RECIPE,
  payload: {
    recipe: RecipeObj
  }
};

export type ACTION_TYPES = loadRecipes | SaveNewRecipe;