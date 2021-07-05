import { RECIPE_ACTION_TYPES, SOCIAL_ACTION_TYPES } from './types/actionEnums';
import { RecipeObj, StepObj } from '../reducers/AppState';
import moment, { Moment } from 'moment';
import { ACTION_TYPES } from './types/RecipeActionTypes';

export function setRecipeDetails(recipeDetails: RecipeObj): ACTION_TYPES {
  const estEatingTime = moment()
    .utcOffset('+1:00')
    .add(recipeDetails.cookingTime, 'minutes');

  return {
    type: RECIPE_ACTION_TYPES.RECIPE_DETAILS,
    payload: {
      RecipeObj: recipeDetails,
      estEatingTime: estEatingTime,
      prevStepStartTime: moment(),
    },
  };
}

export function previousStep(
  steps: StepObj[],
  stepNumber: number = 0, // NEXT STEP INDEX
  estEatingTime: Moment,
  prevStepStartTime: Moment,
  expectedStepTime: number // In Seconds
): ACTION_TYPES {
  const now = moment().utcOffset('+1:00');
  const stepTime = now.diff(prevStepStartTime, 'seconds'); // STEP END TIME - STEP START TIME\
  const timeSaved = stepTime + expectedStepTime; // ACTUAL STEP TIME - EXPECTED STEP TIME
  const step = steps[stepNumber]; // GET NEXT STEP FROM ARRAY OF STEPS
  const previewStep = steps[stepNumber + 1];
  const eatingTime = estEatingTime.add(timeSaved, 'seconds');

  return {
    type: RECIPE_ACTION_TYPES.NEXT_STEP,
    payload: {
      stepNumber,
      step,
      estEatingTime: eatingTime,
      stepStartTime: now,
      previewStep,
    },
  };
}

export function nextStep(
  steps: StepObj[],
  stepNumber: number = 0, // NEXT STEP INDEX
  estEatingTime: Moment,
  prevStepStartTime: Moment,
  expectedStepTime: number // In Seconds
): ACTION_TYPES {
  const now = moment().utcOffset('+1:00');
  const stepTime = now.diff(prevStepStartTime, 'seconds'); // STEP END TIME - STEP START TIME\
  const timeSaved = stepTime - expectedStepTime; // ACTUAL STEP TIME - EXPECTED STEP TIME
  const step = steps[stepNumber]; // GET NEXT STEP FROM ARRAY OF STEPS
  const previewStep = steps[stepNumber + 1];
  const eatingTime = estEatingTime.add(timeSaved, 'seconds');

  return {
    type: RECIPE_ACTION_TYPES.NEXT_STEP,
    payload: {
      stepNumber,
      step,
      estEatingTime: eatingTime,
      stepStartTime: now,
      previewStep,
    },
  };
}

export function getFutureSteps(
  steps: StepObj[],
  stepNumber: number
): ACTION_TYPES {

  return {
    type: RECIPE_ACTION_TYPES.FUTURE_STEPS,
    payload: {
      futureSteps: steps.slice(stepNumber + 1, steps.length) // TODO remove magic number of future steps to show
    },
  };
}

export function resetSteps(): ACTION_TYPES {
  return {
    type: RECIPE_ACTION_TYPES.RESET_STEPS,
  };
}

export function updateRecipeRating(rating: number): ACTION_TYPES {
  return {
    type: SOCIAL_ACTION_TYPES.UPDATE_RATING_RECIPE,
    payload: {
      Rating: rating,
    },
  };
}

export function updateDifficultyRating(rating: number): ACTION_TYPES {
  return {
    type: SOCIAL_ACTION_TYPES.UPDATE_RATING_DIFFICULTY,
    payload: {
      Rating: rating,
    },
  };
}

export function makeFav(): ACTION_TYPES {
  console.log('make fav');

  return {
    type: RECIPE_ACTION_TYPES.MAKE_FAVOURITE,
    payload: {
      recipeName: '',
    },
  };
}

export function removeFav(): ACTION_TYPES {
  console.log('un make fav');

  return {
    type: RECIPE_ACTION_TYPES.REMOVE_FAVOURITE,
    payload: {
      recipeName: '',
    },
  };
}
