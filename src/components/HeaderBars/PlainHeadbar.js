/* PLAIN HEADER BAR - SIMPLE BAR USED TO LABEL THE FORM SCREENS */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colours } from '../../styles';

export const PlainHeadbar = ({ text }) => {
  return (
    <View style={ styles.bar }>
      <View style={ styles.infoBar }>
        <Text style={ styles.headerText }>{ text }</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  bar: {
    justifyContent: 'center',
    flex: 0.5,
    backgroundColor: Colours.ColourPalette.SmartBlue,
  },

  infoBar: {
    flexDirection: 'row',
    backgroundColor: Colours.ColourPalette.SmartBlue,
    justifyContent: 'center',

  },
  headerText: {
    color: 'white',
    fontSize: 20
  }
});
