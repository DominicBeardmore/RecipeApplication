// maintains the part of the app state for creating a recipe

import { CREATE_RECIPE_ACTTION_TYPES } from '../actions/types/actionEnums';
import { RecipeObj, IngredientObj, UtensilObj, StepObj } from './AppState';
import { ACTION_TYPES } from '../actions/types/CreateRecipeTypes';

const INITIAL_STATE = {
  recipeName: '',
  cookingTime: 0,
  numOfSteps: 0,
  ingredients: [
    {
      index: 0,
      ingredientName: '',
      quantity: ''
    }
  ],
  utensils: [
    {
      index: 0,
      utensilName: '',
      quantity: ''
    }
  ],
  steps: [
    {
      index: 0,
      instruction: '',
      timeToComplete: 0
    }
  ],
  favourite: false,
  description: '',
  diffRating: {
    rating: 0,
    totalReviews: 0
  },
  recipeRating: {
    rating: 0,
    totalReviews: 0
  },
  yield: '',
  cost: '',
  titleFormComplete: false,
  images: [],
  selectedIngredient: {
    index: 0,
    ingredientName: '',
    ingredientQuantity: ''
  }
}

export default function CreateRecipeReducer(
  state: RecipeObj = INITIAL_STATE,
  action: ACTION_TYPES
) {
  switch (action.type) {
    case CREATE_RECIPE_ACTTION_TYPES.UPDATE_RECIPE_NAME:
      return {
        ...state,
        recipeName: action.payload.recipeName
      }
    case CREATE_RECIPE_ACTTION_TYPES.UPDATE_RECIPE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description
      }
    case CREATE_RECIPE_ACTTION_TYPES.ADD_PHOTO:
      return {
        ...state,
        images: [...state.images, action.payload.image]
      }
    case CREATE_RECIPE_ACTTION_TYPES.UPDATE_INGREDIENT: // update ingredient at a given index
      return {
        ...state,
        ingredients: [
          ...state.ingredients.slice(0, action.payload.index),
          ingredientReducer(
            state.ingredients[action.payload.index],
            action.payload
          ),
          ...state.ingredients.slice(action.payload.index + 1),
        ]
      }
    case CREATE_RECIPE_ACTTION_TYPES.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          {
            index: state.ingredients.length,
            ingredientName: '',
            quantity: ''
          }]
      }
    case CREATE_RECIPE_ACTTION_TYPES.UPDATE_UTENSIL: // update utensil at a given index
      return {
        ...state,
        utensils: [
          ...state.utensils.slice(0, action.payload.index),
          utensilReducer(
            state.utensils[action.payload.index],
            action.payload
          ),
          ...state.utensils.slice(action.payload.index + 1),
        ]
      }
    case CREATE_RECIPE_ACTTION_TYPES.ADD_UTENSIL:
      return {
        ...state,
        utensils: [
          ...state.utensils,
          {
            index: state.utensils.length,
            utensilName: '',
            quantity: ''
          }]
      }
    case CREATE_RECIPE_ACTTION_TYPES.UPDATE_STEP:
      return {
        ...state,
        steps: [
          ...state.steps.slice(0, action.payload.index),
          stepReducer(
            state.steps[action.payload.index],
            action.payload
          ),
          ...state.steps.slice(action.payload.index + 1)
        ]
      }

    case CREATE_RECIPE_ACTTION_TYPES.ADD_STEP:
      return {
        ...state,
        steps: [
          ...state.steps,
          {
            index: state.steps.length,
            instruction: '',
            timeToComplete: 0
          }
        ]
      }
    default:
      return state
  }
}

const stepReducer = (
  step: StepObj,
  updateStep: StepObj
) => {
  if (updateStep.instruction != step.instruction) {
    return {
      ...step,
      instruction: updateStep.instruction
    }
  } else if (updateStep.timeToComplete != step.timeToComplete) {
    return {
      ...step,
      timeToComplete: updateStep.timeToComplete
    }
  } else {
    return { ...step }
  }
}

const utensilReducer = (
  utensil: UtensilObj,
  utensilUpdate: UtensilObj
) => {

  // Updates the utensil name
  if (utensil.utensilName != utensilUpdate.utensilName) {
    return {
      ...utensil,
      utensilName: utensilUpdate.utensilName,
    }
  }
  // Updates the utensil quantity
  else if (utensil.quantity != utensilUpdate.quantity) {
    return {
      ...utensil,
      quantity: utensilUpdate.quantity,
    }
  }
  else {
    return { ...utensil }
  }
}

const ingredientReducer = (
  ingredient: IngredientObj,
  ingredientUpdate: IngredientObj
) => {

  // Updates the ingredient name
  if (ingredient.ingredientName != ingredientUpdate.ingredientName) {
    console.log("1");

    return {
      ...ingredient,
      ingredientName: ingredientUpdate.ingredientName,
    }
  }
  // Updates the ingredient quantity
  else if (ingredient.quantity != ingredientUpdate.quantity) {
    console.log("2");

    return {
      ...ingredient,
      quantity: ingredientUpdate.quantity,
    }
  }
  else {
    console.log("3");

    return { ...ingredient }
  }
}