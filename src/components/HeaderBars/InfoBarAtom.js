/* HEADER BAR - DISPLAYS HOW LONG A RECIPE MAY TAKE, HOW MANY STEPS INVOVLED AND THE RECIPE SKILL LEVEL 
   USED IN THE PREVIEW PAGE FOR A RECIPE
*/

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colours } from '../../styles';
import { RatingAtom } from "../atoms/RatingAtom";
import Ionicons from '@expo/vector-icons/Ionicons';

export const InfoBarAtom = ({ numOfSteps, cookingTime, skill }) => {
  return (
    <View style={ styles.bar }>
      <View style={ styles.infoBar }>

        <View style={ styles.clockIcon }>
          <Text style={ styles.cookingTime }>{ cookingTime } Mins </Text>
          <Ionicons
            name={ "timer" }
            size={ 25 }
            color={ "white" }
            textAlignVertical="center"
          />
        </View>

        <View style={ styles.clockIcon }>

          <Text style={ styles.steps }>{ numOfSteps } Steps</Text>
        </View>
        <View style={ styles.rating }>
          <View style={ styles.ratingIcons }>
            <RatingAtom
              rating={ 3 }
              iconName='utensil-spoon'
              size={ 20 }
              iconType={ 'FontAwesome5' }
              colour={ "white" }
            />
          </View>
          <Text style={ styles.cookingTime }> Skill</Text>
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  bar: {
    justifyContent: 'center',
    flex: 0.7,
    backgroundColor: Colours.ColourPalette.VibrantBlue,
  },

  infoBar: {
    flexDirection: 'row',
    backgroundColor: Colours.ColourPalette.VibrantBlue,
    justifyContent: 'space-between',
    paddingHorizontal: 20

  },
  clockIcon: {
    textAlignVertical: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  steps: {
    flex: 1,
    fontSize: 15,
    color: 'white',
    flex: 1

  },
  cookingTime: {
    fontSize: 15,
    color: 'white',
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1.5,
  },
  ratingIcons: {
    flexDirection: 'row',

  }
});
