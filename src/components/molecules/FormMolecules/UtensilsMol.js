import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardHeaderAtom } from "../../atoms/FormAtoms/CardHeaderAtom";
import { Layouts, Typography, Colours } from './../../../styles';
import { FlatList } from 'react-native-gesture-handler';
/* UTENSIL MOL - DISPLAYS EACH OF THE INPUTS OF EACH OF THE UTENSILS */


import { updateUtensil, addUtensil } from "./../../../actions/CreateRecipeActions";
import { useDispatch, useSelector } from 'react-redux';
import { DoubleInputAtom } from '../../atoms/FormAtoms/DoubleInputAtom';
import { FormButtonAtom } from "./../../atoms/FormAtoms/FormButtonAtom";
import { HelpTextAtom } from '../../atoms/FormAtoms/HelpTextAtom';

export const UtensilsMol = ({ utensils, val }) => {
  const dispatch = useDispatch();

  const showUtensil = (utensil) => {
    return (
      <DoubleInputAtom
        primaryHandler={ (text) => dispatch(updateUtensil(utensil.index, text, utensil.item.quantity)) }
        secondaryHandler={ (text) => dispatch(updateUtensil(utensil.index, utensil.item.utensilName, text)) }
        primaryVal={ utensil.item.utensilName }
        secondaryVal={ utensil.item.quantity }
        multiline={ true }
        primaryPlaceholder="Utensil"
        secondaryPlaceholder="Quantity"
        maxLength={ 30 }
        minHeight={ 50 }
      />
    );
  };

  return (
    <>
      <CardHeaderAtom cardHeader={ "Utensils List" } />
      <HelpTextAtom text={ "Add each of the utensils to cook this recipe. Make sure to detail their dimensions or quantities." } />
      <View style={ { flex: 10 } }>
        <FlatList
          keyExtractor={ (utensil) => { utensil.index; } }
          data={ utensils }
          renderItem={ (utensil) => showUtensil(utensil) }
        />
      </View>
      <FormButtonAtom
        title="Add Another Utensil"
        disabled={ false }
        onPress={ () => dispatch(addUtensil()) }
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
  helpText: {
    ...Layouts.SidePadding,
    ...Typography.PreviewFont,
  }
});