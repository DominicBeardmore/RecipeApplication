/* CARD HEADER ATOM - DARK BLUE HEADER BAR THAT TOPS ALL THE FORM CARDS */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Layouts, Typography, Colours } from '../../../styles';

export const CardHeaderAtom = ({ cardHeader }) => {
  return (
    <Text style={ styles.cardHeader }>
      { cardHeader }
    </Text>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    fontSize: 15,
    flex: 1,
    color: "white",
    backgroundColor: Colours.ColourPalette.SmartBlue,
    textAlignVertical: 'center',
    minHeight: 25,
    maxHeight: 40
  }
});