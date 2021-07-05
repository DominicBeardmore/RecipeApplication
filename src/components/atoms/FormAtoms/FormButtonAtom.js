/* FORM BUTTON - BUTTON TO ADD ADDITIONAL STEPS, INGREDIENTS AND UTENSILS */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colours, Layouts } from "../../../styles";
import { Button } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';

export const FormButtonAtom = ({ title, onPress, disabled }) => {
  return (
    <View style={ styles.ButtonSection }>
      <Button
        onPress={ onPress }
        title={ title }
        titleStyle={ styles.ButtonText }
        disabled={ disabled }
        backgroundColor={ Colours.ColourPalette.SmartBlue }
        icon={ <Ionicons
          name="add-outline"
          size={ 25 }
          color={ "white" }
        /> }
        iconRight
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonSection: {
    flex: 1,
    ...Layouts.BorderTop,
    justifyContent: "center",
    maxHeight: 50,
    marginHorizontal: 20,
    marginBottom: 50
  },
  ButtonText: {
    fontSize: 20,
  },
});