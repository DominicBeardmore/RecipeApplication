/* RECIPE TITLE FORM - RENDERS THE TITLE FIELD, THE DESCRIPTION FIELD AND ACCESS TO THE CAMERA/CAROUSEL */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeDescriptionChange, recipeNameChange } from "./../../actions/CreateRecipeActions";
import { RecipeDescriptionMol, RecipeTitleMol } from "../molecules/FormMolecules";
import { OpenCameraMol } from "./../molecules/";
import { ButtonAtom } from "./../atoms/";
import { View } from 'react-native';
import { PlainHeadbar } from "./../HeaderBars/";

export const RecipeTitleFormOrg = ({ navigation, formChange }) => {
  const dispatch = useDispatch();

  const recipeName = useSelector(state => state.CreateRecipeReducer.recipeName);
  const description = useSelector(state => state.CreateRecipeReducer.description);
  const images = useSelector(state => state.CreateRecipeReducer.images);

  return (
    <>
      <PlainHeadbar text="Title, Description and Photos" />
      <View style={ { flex: 10 } }>
        <RecipeTitleMol
          primaryHandler={ (text) => dispatch(recipeNameChange(text)) }
          val={ recipeName }
        />
        <RecipeDescriptionMol
          primaryHandler={ (text) => dispatch(recipeDescriptionChange(text)) }
          val={ description }
        />
        <OpenCameraMol
          navigation={ navigation }
          images={ images }
        />
      </View>

      <ButtonAtom
        disabled={ !recipeName || !description || images.length <= 0 }
        title={ "Ingredients and Utensils" }
        onPress={ () => formChange("INGREDIENTS") }
      />
    </>
  );
};