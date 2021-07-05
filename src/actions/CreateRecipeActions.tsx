import { CREATE_RECIPE_ACTTION_TYPES } from './types/actionEnums';
import { ACTION_TYPES } from './types/CreateRecipeTypes';

export const recipeNameChange = (recipeName: string): ACTION_TYPES => {
  return {
    type: CREATE_RECIPE_ACTTION_TYPES.UPDATE_RECIPE_NAME,
    payload: {
      recipeName
    },
  };
}

export const recipeDescriptionChange = (description: string): ACTION_TYPES => {
  return {
    type: CREATE_RECIPE_ACTTION_TYPES.UPDATE_RECIPE_DESCRIPTION,
    payload: {
      description
    },
  };
}

export const updateIngredient = (
  index: number,
  ingredientName: string,
  quantity: string
): ACTION_TYPES => {
  return {
    type: CREATE_RECIPE_ACTTION_TYPES.UPDATE_INGREDIENT,
    payload: {
      index: index,
      ingredientName: ingredientName,
      quantity: quantity
    }
  }
}

export const updateUtensil = (
  index: number,
  utensilName: string,
  quantity: string
): ACTION_TYPES => {
  return {
    type: CREATE_RECIPE_ACTTION_TYPES.UPDATE_UTENSIL,
    payload: {
      index,
      utensilName,
      quantity
    }
  }
}

export const addPhoto = (photo: string): ACTION_TYPES => {
  return {
    type: CREATE_RECIPE_ACTTION_TYPES.ADD_PHOTO,
    payload: {
      image: photo
    }
  }
}

export const updateStep = (
  index: number,
  instruction: string,
  timeToComplete: number
): ACTION_TYPES => {
  return {
    type: CREATE_RECIPE_ACTTION_TYPES.UPDATE_STEP,
    payload: {
      index,
      instruction,
      timeToComplete
    }
  }
}

export const addIngredient = (): ACTION_TYPES => {
  return { type: CREATE_RECIPE_ACTTION_TYPES.ADD_INGREDIENT }
}

export const addUtensil = (): ACTION_TYPES => {
  return { type: CREATE_RECIPE_ACTTION_TYPES.ADD_UTENSIL }
}

export const addStep = (): ACTION_TYPES => {
  return { type: CREATE_RECIPE_ACTTION_TYPES.ADD_STEP }
}