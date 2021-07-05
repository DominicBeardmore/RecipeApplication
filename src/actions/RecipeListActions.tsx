import { LIST_ACTION_TYPES } from './types/actionEnums';
import { apiResponse, RecipeObj } from '../reducers/AppState';
import { ACTION_TYPES } from './types/RecipeListTypes';
import axios from 'axios';

export function loadRecipes(recipes: apiResponse): ACTION_TYPES {
  return {
    type: LIST_ACTION_TYPES.LOAD_RECIPES,
    payload: {
      Recipes: recipes.Items,
    },
  };
}

export function SaveNewRecipe(recipe: RecipeObj): ACTION_TYPES {
  return {
    type: LIST_ACTION_TYPES.SAVE_NEW_RECIPE,
    payload: {
      recipe
    }
  }
}

// Where the API is called
export function fetchRecipes() {

  return function (dispatch: (arg0: any) => void) {
    return axios
      .get('http://localhost:5000/recipes/getallrecipes')
      .then(({ data }) => {
        // console.log(data);
        dispatch(loadRecipes(data));
      })
      .then(() => {
        // console.log("handled");
      });
  };
}
