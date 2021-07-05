/* BUTTON ATOM - USED TO STEP THROUGH THE FORMS AN TO PASS TO COMPLETE FOLLOWING A RECIPE */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colours, Layouts } from "../../styles";
import { Button } from 'react-native-elements';

export const ButtonAtom = ({ title, onPress, disabled }) => {
  return (
    <View style={ styles.ButtonSection }>
      <Button
        onPress={ onPress }
        title={ title }
        titleStyle={ styles.ButtonText }
        disabled={ disabled }
        buttonStyle={ { backgroundColor: Colours.ColourPalette.SmartBlue } }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonSection: {
    // flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Colours.ColourPalette.SmartBlue,
  },
  ButtonText: {
    fontSize: 20,
  },
});