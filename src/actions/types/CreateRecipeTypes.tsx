import { RecipeObj, Image, IngredientObj, UtensilObj, StepObj } from '../../reducers/AppState';
import { CREATE_RECIPE_ACTTION_TYPES } from "./actionEnums";

// update the recipe name
export interface recipeNameChange {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.UPDATE_RECIPE_NAME;
  payload: {
    recipeName: RecipeObj["recipeName"];
  }
};

// update the recipe description
export interface recipeDescriptionChange {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.UPDATE_RECIPE_DESCRIPTION;
  payload: {
    description: RecipeObj["description"];
  }
};

// add photo to the app state
export interface addPhoto {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.ADD_PHOTO;
  payload: {
    image: Image
  }
}

// update a particular ingredient
export interface updateIngredient {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.UPDATE_INGREDIENT;
  payload: {
    index: IngredientObj['index'],
    ingredientName: IngredientObj['ingredientName'],
    quantity: IngredientObj['quantity']
  }
}

// add blank ingredient to list
export interface addIngredient {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.ADD_INGREDIENT
}

// update a particular utensil
export interface updateUtensil {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.UPDATE_UTENSIL;
  payload: {
    index: UtensilObj['index'],
    utensilName: UtensilObj['utensilName'],
    quantity: IngredientObj['quantity']
  }
}

// add blank utensil to list
export interface addUtensil {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.ADD_UTENSIL
}

// update a particular step
export interface updateStep {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.UPDATE_STEP;
  payload: {
    index: StepObj['index']
    instruction: StepObj['instruction']
    timeToComplete: StepObj['timeToComplete']
  }
}

// add blank step to list
export interface addStep {
  type: typeof CREATE_RECIPE_ACTTION_TYPES.ADD_STEP;
}

export type ACTION_TYPES =
  recipeNameChange |
  recipeDescriptionChange |
  addPhoto |
  updateIngredient |
  addIngredient |
  addUtensil |
  updateUtensil |
  updateStep |
  addStep;