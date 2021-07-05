/* INGREDIENT ATOM - SINGLE INGREDIENT THAT APPEARS IN LISTS ON THE STEP MOL */

import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Typography } from './../../styles';

export const IngredientAtom = ({ ingredient, quantity }) => {
  return (
    <View style={ styles.ingredientsContainer }>
      <Text style={ styles.ingredient }>{ ingredient }</Text>
      <Text style={ styles.quantity }>{ quantity }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  ingredient: {
    flex: 2,
    ...Typography.Ingredients,
  },
  quantity: {
    flex: 1,
    ...Typography.InstructionFont,
  },
});
