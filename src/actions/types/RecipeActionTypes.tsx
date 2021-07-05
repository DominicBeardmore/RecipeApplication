import { RecipeObj, StepObj, Rating } from '../../reducers/AppState';
import { RECIPE_ACTION_TYPES, SOCIAL_ACTION_TYPES } from "./actionEnums";
import { Moment } from 'moment';

// select recipe to preview/follow
export interface SetRecipeDetails {
  type: typeof RECIPE_ACTION_TYPES.RECIPE_DETAILS,
  payload: {
    RecipeObj: RecipeObj,
    estEatingTime: Moment,
    prevStepStartTime: Moment
  }
};

// load the next step
export interface NextStep {
  type: typeof RECIPE_ACTION_TYPES.NEXT_STEP,
  payload: {
    stepNumber: number,
    step: StepObj,
    previewStep: StepObj,
    stepStartTime: Moment,
    estEatingTime: Moment
  }
}

// load all the future steps for a recipe
export interface RecipeStack {
  type: typeof RECIPE_ACTION_TYPES.FUTURE_STEPS,
  payload: {
    futureSteps: StepObj[]
  }
}

// clear memory of the recipe that is being followed
export interface ResetSteps {
  type: typeof RECIPE_ACTION_TYPES.RESET_STEPS,
}

// update recipe rating
export interface UpdateRecipeRating {
  type: typeof SOCIAL_ACTION_TYPES.UPDATE_RATING_RECIPE,
  payload: {
    Rating: Rating
  }
}

// update recipe difficulty
export interface UpdateDifficultyRating {
  type: typeof SOCIAL_ACTION_TYPES.UPDATE_RATING_DIFFICULTY,
  payload: {
    Rating: Rating
  }
}

// make a recipe a favourite
export interface MakeFavourite {
  type: typeof RECIPE_ACTION_TYPES.MAKE_FAVOURITE,
  payload: {
    recipeName: string
  }
}

// remove a recipe from favourites
export interface RemoveFavourite {
  type: typeof RECIPE_ACTION_TYPES.REMOVE_FAVOURITE,
  payload: {
    recipeName: string
  }
}

export type ACTION_TYPES = SetRecipeDetails
  | RecipeStack
  | NextStep
  | ResetSteps
  | UpdateRecipeRating
  | UpdateDifficultyRating
  | MakeFavourite
  | RemoveFavourite;
