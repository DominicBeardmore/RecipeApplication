/* BUTTON GROUP ATOM - THREE PREVIEW BUTTONS REFERENCED IN THE PREVIEW SCREEN */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colours, Layouts } from "../../styles";
import { ButtonGroup } from 'react-native-elements';

export const ButtonGroupAtom = ({ setPreview, preview }) => {

  const buttons = [ 'About', 'Steps', 'Ingredients' ];
  return (
    <ButtonGroup
      onPress={ setPreview }
      selectedIndex={ preview }
      buttons={ buttons }
      selectedButtonStyle={ styles.selected }
      buttonStyle={ styles.unselected }
      containerStyle={ {
        flex: 0.8,
        marginHorizontal: 0,
        marginVertical: 0
      } }
      selectedTextStyle={ styles.selectedTextStyle }
      textStyle={ styles.textStyle }
    />
  );
};

const styles = StyleSheet.create({
  selected: {
    backgroundColor: Colours.ColourPalette.ContrastPink,

  },
  unselected: {
    backgroundColor: Colours.ColourPalette.ContrastPink,
  },
  selectedTextStyle: {
    textDecorationLine: 'underline'
  },

  textStyle: {
    color: 'white',
    fontSize: 19
  }

});
