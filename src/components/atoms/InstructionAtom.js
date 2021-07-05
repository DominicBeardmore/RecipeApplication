/* INSTRUCTION ATOM - SINGLE STEPS INSTRUCTION APPEARS IN THE LIST IN THE STEP MOL */

import { Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Typography } from './../../styles';

export const InstructionAtom = ({ step }) => {
  return <Text style={ styles.instruction }>{ step.instruction }</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    ...Typography.Ingredients,
  },
});
