/* DOUBLE INPUT - TWO TEXT INPUTS INLINE
USED IN THE INGREDIENTS AND THE UTENSIL FIELDS
 */

import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Layouts, Typography, Colours } from '../../../styles';
import { useDispatch, useSelector } from 'react-redux';

export const DoubleInputAtom = ({
  primaryHandler,
  secondaryHandler,
  primaryVal,
  secondaryVal,
  primaryPlaceholder,
  secondaryPlaceholder,
  maxLength,
  multiline,
  minHeight
}) => {
  return (
    <View style={ { minHeight: minHeight, ...styles.cardBody } }>
      <TextInput
        style={ styles.primaryInput }
        placeholder={ primaryPlaceholder }
        onChangeText={ (text) => primaryHandler(text) }
        value={ primaryVal }
        autoCapitalize={ 'words' }
        maxLength={ maxLength }
        multiline={ multiline }
      />
      <TextInput
        style={ styles.secondaryInput }
        placeholder={ secondaryPlaceholder }
        onChangeText={ (text) => secondaryHandler(text) }
        value={ secondaryVal }
        autoCapitalize={ 'words' }
        maxLength={ maxLength }
        multiline={ multiline }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    flexDirection: 'row',
    flex: 3,
    borderColor: Colours.ColourPalette.SmartBlue,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20
  },

  primaryInput: {
    flex: 3
  },
  secondaryInput: {

    flex: 1
  }
});