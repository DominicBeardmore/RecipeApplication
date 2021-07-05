/* PREVIEW INGREDIENT ATOM - USED TO DISPLAY BOTH INGREDIENTS AND UTENSILS IN THE PREVIEW SCREEN LISTS */

import { Text, View, StyleSheet } from 'react-native';
import React, { Component, useState } from 'react';
import { Typography } from './../../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export const PreviewIngredientAtom = ({ ingredient, quantity }) => {
  const [ tick, setTick ] = useState(false);

  return (
    <View style={ styles.ingredientsContainer }>
      <Text style={ styles.ingredient }>{ ingredient }</Text>
      <Text style={ styles.quantity }>{ quantity }</Text>
      { tick ?
        <Ionicons onPress={ () => setTick(!tick) } name="md-checkmark" size={ 24 } color="green" /> :
        <Ionicons onPress={ () => setTick(!tick) } name="md-close" size={ 24 } color="red" /> }

    </View>
  );
};

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
