// all parts of the state Typescript checked
import { Moment } from 'moment';

export interface RecipeObj {
  recipeName: string
  numOfSteps: number
  cost: string
  yield: string
  description: string
  favourite: boolean
  diffRating: rating
  recipeRating: rating
  ingredients: IngredientObj[] | []
  utensils: UtensilObj[] | []
  steps: StepObj[] | []
  cookingTime: number
  images: Image[] | []
};

export interface apiResponse {
  Items: RecipeObj[]
}

export interface rating {
  rating: number
  totalReviews: number
}

export interface StepObj {
  index: number
  instruction: string
  timeToComplete: number
  // ingredients: IngredientObj[]
  // utensils: UtensilObj[]
};

export interface RecipeState extends RecipeObj {

  step: StepObj | null
  previewStep: StepObj | null

  ready: boolean
  stepNumber: number
  estEatingTime: Moment
  stepStartTime: string

  stepTime: number          // HOW LONG THIS STEP HAS TAKEN
  cookingTime: number       // HOW LONG THE RECIPE HAS TAKEN SO FAR
  estTime: string           // Estimate eating time

  userRatedDifficulty: number
  userRecipeRating: number
}

export interface IngredientObj {
  index: number
  ingredientName: string
  quantity: string
}

export interface UtensilObj {
  index: number
  utensilName: string
  quantity: string
}

export interface ListState {
  listRecipes: RecipeObj[]
  ready: boolean
}
export type Image = string;

export type Rating = number;