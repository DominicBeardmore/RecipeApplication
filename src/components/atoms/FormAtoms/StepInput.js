/* STEP INPUT - TWO TEXT INPUTS VERTICALLY ALIGNED. USED TO INPUT THE STEPS WHEN CREATING A RECIPE */

import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, TextInput } from 'react-native';
import { Layouts, Typography, Colours } from '../../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackgroundColor } from '../../../styles/colours';

export const StepInputAtom = ({
  stepNumber,
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

  const [ showInstruction, toggleInstruction ] = useState(true);

  const displayInstruction = () => {
    return (
      <View style={ { minHeight: minHeight, ...styles.cardBody } }>
        <TextInput
          style={ styles.secondaryInput }
          placeholder={ secondaryPlaceholder }
          onChangeText={ (text) => secondaryHandler(text) }
          value={ secondaryVal }
          autoCapitalize={ 'words' }
          maxLength={ maxLength }
          multiline={ multiline }
        />
        <TextInput
          style={ styles.primaryInput }
          placeholder={ primaryPlaceholder }
          onChangeText={ (text) => primaryHandler(text) }
          value={ primaryVal }
          autoCapitalize={ 'words' }
          maxLength={ maxLength }
          multiline={ multiline }
          numberOfLines={ 5 }
        />
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={ () => toggleInstruction(!showInstruction) }

      >
        <Text style={ !showInstruction ? { marginBottom: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginHorizontal: 20, ...styles.stepNum } : { marginHorizontal: 20, ...styles.stepNum } }>Step: { stepNumber } </Text>
      </TouchableOpacity>
      {showInstruction ? displayInstruction() : <></> }
    </>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    flexDirection: 'column',
    flex: 10,
    borderColor: Colours.ColourPalette.SmartBlue,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginHorizontal: 20
  },

  stepNum: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: Colours.ColourPalette.SmartBlue,
    paddingLeft: 10
  },
  primaryInput: {
    flex: 5,
    paddingTop: 10,
    textAlignVertical: 'top'
  },
  secondaryInput: {
    flex: 1,
    paddingTop: 10,
    textAlignVertical: 'top'
  }
});