/* PROGRESS BAR - BAR THAT APPEARS WHEN FOLLING A RECIPE */

import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Colours } from './../../styles';
import * as Progress from 'react-native-progress';
import Feather from '@expo/vector-icons/Feather';

export const ProgressAtom = ({ back, onPause, progress, skip }) => {
  return (
    <TouchableOpacity onPress={ onPause } style={ styles.progressContainer }>
      {/* BACK A STEP */ }
      <Feather name="skip-back" size={ 40 } style={ styles.skipIcon } onPress={ back } />
      {/* PROGRESS BAR */ }
      <Progress.Bar
        progress={ progress }
        color={ Colours.ColourPalette.ContrastPink }
        borderRadius={ 0 }
        borderWidth={ 0 }
        width={ null }
        height={ 70 }
        flex={ 8 }
      />
      {/* FORWARDS A STEP */ }
      <Feather name="skip-forward" size={ 40 } style={ styles.skipIcon } onPress={ skip } />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row'
  },

  skipIcon: {
    flex: 1,
    alignSelf: 'center'
  }
});
