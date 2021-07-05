/* RECIPE DESCRIPTION MOL - CARD THAT HANDLES RECIPE DESCRIPTION INPUT */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layouts, Typography, Colours } from './../../../styles';
import { CardHeaderAtom } from "../../atoms/FormAtoms/";
import { SingleInputAtom } from "./../../atoms/FormAtoms/SingleInputAtom";


export const RecipeDescriptionMol = ({ primaryHandler, val }) => {
  return (
    <View style={ styles.Card }>
      <CardHeaderAtom cardHeader={ "Recipe Description" } />
      <SingleInputAtom
        primaryHandler={ (text) => primaryHandler(text) }
        val={ val }
        multiline={ true }
        placeholder="How do you wish to describe this dish?"
        maxLength={ 1000 }
        minHeight={ 100 }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Card: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    flexDirection: 'column',
    flex: 2,
    maxHeight: 300,
    marginVertical: 20,
  }
});