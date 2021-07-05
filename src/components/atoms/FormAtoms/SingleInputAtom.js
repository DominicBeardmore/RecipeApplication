/* SINGLE INPUT - USED TO INPUT RECIPE TITLE AND DESCRIPTION */

import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Layouts, Typography, Colours } from '../../../styles';
import { useDispatch, useSelector } from 'react-redux';

export const SingleInputAtom = ({
  placeholder,
  primaryHandler,
  val,
  maxLength,
  multiline,
  minHeight
}) => {
  return (
    <View style={ { minHeight: minHeight, ...styles.cardBody } }>
      <TextInput
        placeholder={ placeholder }
        onChangeText={ (text) => primaryHandler(text) }
        value={ val }
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
    flex: 5,
    borderColor: Colours.ColourPalette.SmartBlue,
    borderWidth: 1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  }
});