/* STEP ATOM - APPEARS IN THE LIST OF STEPS IN BOTH THE RECIPE AND THE PREVIEW RECIPE SCREENS */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StepAtom = ({ stepNum, step }) => {
  return (
    <TouchableOpacity style={ styles.stepContainer }>
      <View style={ styles.mainInstruction }>
        <Text style={ styles.key }>{ stepNum }.</Text>
        <Text style={ styles.instruction }>{ step.instruction }</Text>
      </View>
    </TouchableOpacity>
  );
};

export { StepAtom };

const styles = StyleSheet.create({
  stepContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    paddingBottom: 5
  },
  key: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 5
  },
  mainInstruction: {
    flexDirection: 'row',
    flex: 2,
    marginBottom: 5,
  },
  instruction: {
    flex: 6.5,
    fontSize: 15
  },
});
