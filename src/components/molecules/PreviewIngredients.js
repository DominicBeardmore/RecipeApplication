/* PREVIEW INGREDIENTS - HANDLES SWITCHING BETWEEN SHOWING THE INGREDIENTS OF UTENSILS IN THE PREVIEW PAGE */

import React, { Component, useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Colours, Layouts, Typography } from "../../styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import ServingMol from "./ServingMol";
import { FlatList } from 'react-native-gesture-handler';
import { PreviewIngredientAtom } from "../atoms/";

const showIngredient = (ingredient) => {
  return <PreviewIngredientAtom
    key={ ingredient.index }
    ingredient={ ingredient.item.ingredientName }
    quantity={ ingredient.item.quantity }
  />;
};

const showUtensil = (utensil) => {
  return <PreviewIngredientAtom
    key={ utensil.index }
    ingredient={ utensil.item.utensilName }
    quantity={ utensil.item.quantity }
  />;
};

const PreviewIngredients = ({ ingredients, utensils }) => {
  const [ toggled, setToggle ] = useState(false);
  if (!toggled) {
    return (
      <View style={ { flex: 1, ...Layouts.SidePadding } }>
        <ServingMol setToggle={ setToggle } toggled={ toggled } />
        <FlatList
          data={ ingredients }
          keyExtractor={ (ingredient) => { ingredient.index; } }
          renderItem={ (ingredient) => showIngredient(ingredient) }
        />
      </View>
    );
  } else {
    return (
      <View style={ { flex: 1, ...Layouts.SidePadding } }>
        <ServingMol setToggle={ setToggle } toggled={ toggled } />
        <FlatList
          data={ utensils }
          keyExtractor={ (utensil) => { utensil.index; } }
          renderItem={ (utensil) => showUtensil(utensil) }
        />
      </View>
    );
  }
};
export { PreviewIngredients };

const styles = StyleSheet.create({
  ingredientsContainer: {
    flexDirection: "row",
    height: 25,
    marginHorizontal: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginBottom: 15,
  },
  ingredient: {
    flex: 2,
    ...Typography.PreviewFont,
    fontSize: 20,
  },
  quantity: {
    flex: 1,
    ...Typography.PreviewFont,
    fontSize: 20,
  },
});