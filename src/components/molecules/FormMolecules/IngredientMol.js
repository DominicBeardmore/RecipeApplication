/* INGREDIENT MOL - DISPLAYS EACH OF THE INPUTS OF EACH OF THE INGREDIENTS */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardHeaderAtom } from "../../atoms/FormAtoms/CardHeaderAtom";
import { Layouts, Typography } from './../../../styles';
import { FlatList } from 'react-native-gesture-handler';
import { updateIngredient, addIngredient } from "./../../../actions/CreateRecipeActions";
import { useDispatch, useSelector } from 'react-redux';
import { DoubleInputAtom } from './../../atoms/FormAtoms/DoubleInputAtom';
import { FormButtonAtom } from "./../../atoms/FormAtoms/FormButtonAtom";
import { HelpTextAtom } from '../../atoms/FormAtoms/HelpTextAtom';

export const IngredientMol = ({ ingredients, val }) => {
  const dispatch = useDispatch();

  const showIngredient = (ingredient) => {
    return (
      <DoubleInputAtom
        primaryHandler={ (text) => dispatch(updateIngredient(ingredient.index, text, ingredient.item.quantity)) }
        secondaryHandler={ (text) => dispatch(updateIngredient(ingredient.index, ingredient.item.ingredientName, text)) }
        primaryVal={ ingredient.item.ingredientName }
        secondaryVal={ ingredient.item.quantity }
        multiline={ true }
        primaryPlaceholder="Ingredient"
        secondaryPlaceholder="Quantity"
        maxLength={ 30 }
        minHeight={ 50 }
      />
    );
  };

  return (
    <>
      <CardHeaderAtom cardHeader={ "Ingredients List" } />
      <HelpTextAtom text={ "Add each of the ingredients with their quantities." } />
      <View style={ { flex: 10 } }>
        <FlatList
          keyExtractor={ (ingredient) => { ingredient.index; } }
          data={ ingredients }
          renderItem={ (ingredient) => showIngredient(ingredient) }
        />
      </View>
      <FormButtonAtom
        title="Add Ingredient"
        disabled={ false }
        onPress={ () => dispatch(addIngredient()) }
      />
    </>
  );
};




const styles = StyleSheet.create({
  Card: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    flexDirection: 'column',
    maxHeight: 300,
    marginVertical: 20,
  },

});