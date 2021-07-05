/* HEART ATOM - APPEARS IN THE PREVIEW HEADER BAR */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Colours } from '../../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export const HeartAtom = ({ favourite, favBtn }) => {
  if (!favourite) {
    return <Ionicons
      style={ styles.icon }
      name={ 'heart-outline' }
      size={ 35 }
      color={ Colours.ColourPalette.ContrastPink }
      onPress={ favBtn }
    />;
  } else {
    return <Ionicons
      style={ styles.icon }
      name={ 'heart' }
      size={ 35 }
      color={ Colours.ColourPalette.ContrastPink }
      onPress={ favBtn }
    />;
  }
};
const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center'
  }
});