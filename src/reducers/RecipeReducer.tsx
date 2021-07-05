// maintains the app state for following a recipe

import { ACTION_TYPES } from '../actions/types/RecipeActionTypes';
import { RecipeState } from './AppState';
import { RECIPE_ACTION_TYPES, SOCIAL_ACTION_TYPES } from '../actions/types/actionEnums';
import moment from 'moment';

const INITIAL_STATE = {
  recipeName: '',
  numOfSteps: 0,
  cost: '',
  yield: '',
  description: '',
  favourite: false,
  diffRating: {
    rating: 0,
    totalReviews: 0
  },
  recipeRating: {
    rating: 0,
    totalReviews: 0
  },
  cookingTime: 0,
  ingredients: [],
  utensils: [],
  steps: [],
  previewStep: null,
  step: null,
  futureSteps: [],
  images: [],
  ready: false,
  stepNumber: 0,
  stepTime: 0,
  estEatingTime: moment(),
  TimeSaved: '',
  estTime: '',
  stepStartTime: '',
  StepEndTime: '',

  userRecipeRating: 0,
  userRatedDifficulty: 0
}

export default function RecipeReducer(
  state: RecipeState = INITIAL_STATE,
  action: ACTION_TYPES
) {
  switch (action.type) {
    case RECIPE_ACTION_TYPES.RECIPE_DETAILS:
      return {
        ...state,
        recipeName: action.payload.RecipeObj.recipeName,
        description: action.payload.RecipeObj.description,
        numOfSteps: action.payload.RecipeObj.numOfSteps,
        steps: action.payload.RecipeObj.steps,
        ingredients: action.payload.RecipeObj.ingredients,
        utensils: action.payload.RecipeObj.utensils,
        cookingTime: action.payload.RecipeObj.cookingTime,
        estEatingTime: action.payload.estEatingTime,
        prevStepStartTime: action.payload.prevStepStartTime,
        favourite: action.payload.RecipeObj.favourite,
        images: [...action.payload.RecipeObj.images],
        ready: true
      };
    case RECIPE_ACTION_TYPES.NEXT_STEP:
      return {
        ...state,
        stepNumber: action.payload.stepNumber,
        step: action.payload.step,
        stepStartTime: action.payload.stepStartTime,
        estEatingTime: action.payload.estEatingTime,
        previewStep: action.payload.previewStep,
        ready: true,
      }
    case RECIPE_ACTION_TYPES.RESET_STEPS:
      return {
        ...state,
        stepNumber: 0,
        userRatedDifficulty: 0,
        userRecipeRating: 0
      }
    case RECIPE_ACTION_TYPES.FUTURE_STEPS:
      return {
        ...state,
        futureSteps: action.payload.futureSteps
      }
    case SOCIAL_ACTION_TYPES.UPDATE_RATING_DIFFICULTY:
      return {
        ...state,
        userRatedDifficulty: action.payload.Rating
      }
    case SOCIAL_ACTION_TYPES.UPDATE_RATING_RECIPE:
      return {
        ...state,
        userRecipeRating: action.payload.Rating
      }
    case RECIPE_ACTION_TYPES.REMOVE_FAVOURITE:
      return {
        ...state,
        favourite: false
      }
    case RECIPE_ACTION_TYPES.MAKE_FAVOURITE:
      return {
        ...state,
        favourite: true
      }
    default:
      return state;
  }
}