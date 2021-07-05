/* STEP FORM - RENDERS THE STEP FIELDS */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonAtom } from "./../atoms/";
import { View } from 'react-native';
import { StepMol } from '../molecules/FormMolecules/';
import { SaveNewRecipe } from "./../../actions/RecipeListActions";

export const StepForm = ({ navigation, formChange }) => {
  const dispatch = useDispatch();

  const recipe = useSelector(state => state.CreateRecipeReducer);

  const newRecipe = () => {

    totalTime = 0;
    // calculates the total time to complete
    recipe.steps.map((step) => {
      totalTime += parseInt(step.timeToComplete);
    });

    // transforms each step time into seconds
    multiplyStepTime = {
      ...recipe,
      steps: recipe.steps.map((step) => {
        return {
          ...step,
          timeToComplete: parseInt(step[ "timeToComplete" ]) * 60,
        };
      })
    };

    // a step object to be saved into the application state
    return {
      "recipeName": recipe.recipeName,
      "cookingTime": totalTime,
      "cost": "Cheap",
      "yield": "4 People",
      "description": recipe.description,
      "favourite": true,
      "numOfSteps": recipe.steps.length,
      "diffRating": {
        "rating": 2,
        "totalReviews": 100
      },
      "recipeRating": {
        "rating": 5,
        "totalReviews": 100
      },
      "ingredients": [ ...recipe.ingredients ],
      "utensils": [ ...recipe.utensils ],
      "steps": multiplyStepTime.steps,
      "images": [ ...recipe.images ]
    };
  };

  const followRecipe = () => {
    const newRecipeObj = new newRecipe;
    dispatch(SaveNewRecipe(newRecipeObj));
    navigation.navigate('YourRecipes');
  };


  return (
    <>
      <View style={ { flex: 10 } }>
        <StepMol steps={ recipe.steps } />
      </View>
      <ButtonAtom
        disabled={ recipe.steps.length <= 0 }
        title={ "Save Recipe" }
        onPress={ () => followRecipe() }
      />
    </>
  );
};