export enum RECIPE_ACTION_TYPES {
  RECIPE_DETAILS = 'RECIPE_ACTION/RECIPE_DETAILS', // 
  NEXT_STEP = 'RECIPE_ACTION/NEXT_STEP', // goes to the next step
  UPDATE_TIME = 'RECIPE_ACTION/UPDATE_TIME', // updates the estimated time when the user goes to the next step
  RESET_STEPS = 'RECIPE_ACTION/RESET_STEPS', // resets the state that holds the recipe the user is following once they have completed the recipe
  MAKE_FAVOURITE = 'RECIPE_ACTION/MAKE_FAVOURITE', // favourties recipe. Not implemented in a reducer
  REMOVE_FAVOURITE = 'RECIPE_ACTION/REMOVE_FAVOURITE', // unfavourties recipe. Not implemented in a reducer
  FUTURE_STEPS = 'RECIPE_ACTION/FUTURE_STEPS' // retrieves the future steps of a recipe
}

export enum LIST_ACTION_TYPES {
  LOAD_RECIPES = 'LIST_ACTION/LOAD_RECIPES', // loads all the recipes into the application state from the JSON
  SAVE_NEW_RECIPE = 'CREATE_RECIPE_ACTTION_TYPES/SAVE_NEW_RECIPE' // saves a new recipe to the application state
}

export enum SOCIAL_ACTION_TYPES {
  UPDATE_RATING_RECIPE = 'SOCIAL_ACTION/UPDATE_RECIPE_RATING', // stores the users rating of a recipe
  UPDATE_RATING_DIFFICULTY = 'SOCIAL_ACTION/UPDATE_RATING_DIFFICULTY' // stores the difficulty of a recipe into the app state
}

export enum CREATE_RECIPE_ACTTION_TYPES {
  UPDATE_RECIPE_NAME = 'CREATE_RECIPE_ACTTION_TYPES/UPDATE_RECIPE_NAME', // update recipe name
  UPDATE_RECIPE_DESCRIPTION = 'CREATE_RECIPE_ACTTION_TYPES/UPDATE_RECIPE_DESCRIPTION', // update recipe description
  ADD_PHOTO = 'CREATE_RECIPE_ACTTION_TYPES/ADD_PHOTO', // add photo to photo list
  ADD_INGREDIENT = 'CREATE_RECIPE_ACTTION_TYPES/ADD_INGREDIENT', // add to ingredient list
  UPDATE_INGREDIENT = 'CREATE_RECIPE_ACTTION_TYPES/UPDATE_INGREDIENT', // edit highlighted ingredient
  ADD_UTENSIL = 'CREATE_RECIPE_ACTTION_TYPES/ADD_UTENSIL', // add to utensil list
  UPDATE_UTENSIL = 'CREATE_RECIPE_ACTTION_TYPES/UPDATE_UTENSIL', // edit highlighted utensil
  UPDATE_STEP = 'CREATE_RECIPE_ACTTION_TYPES/UPDATE_STEP', // edit step
  ADD_STEP = 'CREATE_RECIPE_ACTTION_TYPES/ADD_STEP', // add new step to list of steps
  SELECT_INGREDIENT = 'CREATE_RECIPE_ACTTION_TYPES/SELECT_INGREDEINT', // highlight ingredient to edit
}