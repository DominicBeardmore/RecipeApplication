// maintins the app state for loading recipes and storing new ones

import { LIST_ACTION_TYPES } from '../actions/types/actionEnums';
import { ListState } from './AppState';
import { ACTION_TYPES } from './../actions/types/RecipeListTypes';

const INITIAL_STATE = {
  listRecipes: [],
  ready: false
}

export default function RecipeListReducer(
  state: ListState = INITIAL_STATE,
  action: ACTION_TYPES
) {
  switch (action.type) {
    case LIST_ACTION_TYPES.LOAD_RECIPES:
      return {
        ...state,
        listRecipes: action.payload.Recipes
      }
    case LIST_ACTION_TYPES.SAVE_NEW_RECIPE:
      return {
        ...state,
        listRecipes: [
          ...state.listRecipes,
          action.payload.recipe
        ]
      }
    default:
      return state
  }
}