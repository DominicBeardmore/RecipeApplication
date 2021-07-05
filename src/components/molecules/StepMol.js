import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { InstructionAtom, IngredientAtom } from '../atoms/';
import { Colours, Layouts, Typography } from './../../styles';

export const StepMol = ({ step, stepNumber, numOfSteps }) => {
  return (
    <View style={ styles.stepContainer }>
      <View style={ styles.header }>
        <Text style={ styles.headerText }>Step Number : { stepNumber + 1 }/{ numOfSteps }</Text>
      </View>
      <View style={ styles.instructionContainer }>
        <InstructionAtom step={ step } />
      </View>
    </View>
  );
};

const showIngredients = (ingredient) => {
  return (
    <IngredientAtom
      key={ ingredient.item.ingredient }
      ingredient={ ingredient.item.ingredient }
      quantity={ ingredient.item.quantity }
    />
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 2,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white'
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    borderBottomWidth: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  headerText: {
    color: Colours.ColourPalette.SmartBlue,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 20
  },
  ingredientsContainer: {
    justifyContent: 'center',
    ...Layouts.BigBoxPadding,
    flex: 3,
  },
  instructionContainer: {
    ...Layouts.BigBoxPadding,
    flex: 2,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
});
