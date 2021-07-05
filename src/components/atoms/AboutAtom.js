/* ABOUT ATOM - REFERENCED IN THE PREVIEW SCREEN AS THE DESCRIPTION OF THE RECIPE */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Layouts, Typography } from './../../styles';

export const AboutAtom = ({ about }) => {
  return (
    <Text style={ styles.about }>
      { about }
    </Text>
  );
};

const styles = StyleSheet.create({
  about: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding
  }
});