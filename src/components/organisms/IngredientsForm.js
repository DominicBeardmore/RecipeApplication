/* INGREDIENTS FORM - RENDERS THE INGREDIENTS FORM MOL */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientMol } from "./../molecules/FormMolecules/IngredientMol";
import { ButtonAtom } from "./../atoms/ButtonAtom";
import { View } from 'react-native';

export const IngredientsForm = ({ navigation, formChange }) => {
  const ingredients = useSelector(state => state.CreateRecipeReducer.ingredients);
  return (
    <>
      <View style={ { flex: 10 } }>
        <IngredientMol ingredients={ ingredients } />
      </View>
      <ButtonAtom
        disabled={ ingredients.length <= 0 }
        title={ "Add Utensils" }
        onPress={ () => formChange("UTENSILS") }
      />
    </>
  );
};