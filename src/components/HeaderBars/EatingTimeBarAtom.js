/* EATING TIME BAR - RENDERS THE ESTIMATED EATING TIME FOR A RECIPE */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colours } from '../../styles';

export const EatingTimeBarAtom = ({ eatingTime }) => {
  return (
    <View style={ styles.bar }>
      <View style={ styles.infoBar }>
        <Text style={ styles.text }>Ready to Eat at: { eatingTime }</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  bar: {
    justifyContent: 'center',
    flex: 0.4,
    backgroundColor: Colours.ColourPalette.VibrantBlue,
  },

  infoBar: {
    backgroundColor: Colours.ColourPalette.VibrantBlue,
    flexDirection: 'row'
  },
  clockIcon: {
    textAlignVertical: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    flex: 1,
    textAlign: 'center'

  },
});
