/* RECIPE TITLE - HANDLES THE INPUTTING OF A RECIPE TITLE */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layouts, Typography, Colours } from './../../../styles';
import { CardHeaderAtom } from "../../atoms/FormAtoms/CardHeaderAtom";
import { SingleInputAtom } from "./../../atoms/FormAtoms/SingleInputAtom";


export const RecipeTitleMol = ({ primaryHandler, val }) => {
  return (
    <View style={ styles.Card }>
      <CardHeaderAtom cardHeader={ "Recipe Title" } />
      <SingleInputAtom
        primaryHandler={ primaryHandler }
        placeholder="What would you like to call this tasty dish?"
        maxLength={ 20 }
        val={ val }
        multiline={ true }
        minHeight={ 40 }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Card: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    flexDirection: 'column',
    flex: 0.5,
    maxHeight: 300,
    marginTop: 20,
    marginBottom: 10
  }
});