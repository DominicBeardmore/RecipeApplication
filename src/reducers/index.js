import { combineReducers } from 'redux';
import RecipeReducer from "./RecipeReducer";
import RecipeListReducer from "./RecipeListReducer";
import CreateRecipeReducer from './CreateRecipeReducer';

export default combineReducers({
  RecipeReducer,
  RecipeListReducer,
  CreateRecipeReducer
});