/* TOGGLE ATOM - RENDERS THE TOGGLE TO SWITCH BETWEEN INGREDIENT AND UTENSIL LISTS IN THE PREVIEW RECIPE SCREEN */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export const ToggleAtom = ({ label, toggled, toggle }) => {
  if (toggled) {
    return (
      <View style={ styles.iconView }>
        <Text style={ styles.iconText }>Utensils</Text>
        <Feather
          style={ styles.icon }
          name={ 'toggle-left' }
          size={ 35 }
          color={ 'black' }
          onPress={ toggle }
        />
      </View>);
  } else {
    return (
      <View style={ styles.iconView }>
        <Text style={ styles.iconText }>Ingredients</Text>
        <Feather
          style={ styles.icon }
          name={ 'toggle-right' }
          size={ 35 }
          color={ 'black' }
          onPress={ toggle }
        />
      </View>);
  }
};

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 40,
    // marginHorizontal: 10,
  },
  iconText: {
    paddingRight: 10,
    fontSize: 20
  }
});
