/* PREVIEW SCREEN - BEFORE STARTING A RECIPE, FURTHER INFOMATION IS PRESENTED TO THE USER */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image, Text } from 'react-native';
import { PreviewSectionOrganism } from '../organisms/PreviewSectionOrganism';
import { setRecipeDetails, nextStep } from '../../actions/RecipeActions';
import { Colours, Layouts, Typography } from '../../styles';
import { InfoBarAtom } from "../HeaderBars/";
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  startCooking = () => {
    const { steps, stepNumber, estEatingTime, prevStepStartTime, recipeName } = this.props;
    this.props.nextStep(steps, stepNumber, estEatingTime, prevStepStartTime); // Go to the first step and start the cooking

    this.props.navigation.push('RecipeScreen', {
      name: recipeName,
      time: estEatingTime.format('HH:mm'),
      stepNumber: stepNumber + 1,
    });
  };

  render() {
    const { ingredients, steps, numOfSteps, utensils, cookingTime, description, images } = this.props;
    return (
      <View style={ styles.Content }>
        <InfoBarAtom cookingTime={ cookingTime } numOfSteps={ numOfSteps } />
        <View style={ styles.ImageSection }>
          <ImageBackground style={ styles.ImageBackground } source={ { uri: "data:image/png;base64," + images[ 0 ] } }>
            <TouchableOpacity style={ styles.startBtn } onPress={ this.startCooking }>
              <Text style={ styles.start }>Start Cooking</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <PreviewSectionOrganism description={ description } ingredients={ ingredients } steps={ steps } utensils={ utensils } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    steps,
    stepNumber,
    estEatingTime,
    prevStepStartTime,
    ingredients,
    recipeName,
    numOfSteps,
    cookingTime,
    utensils,
    description,
    images
  } = state.RecipeReducer;

  return {
    description,
    steps,
    stepNumber,
    estEatingTime,
    prevStepStartTime,
    ingredients,
    recipeName,
    numOfSteps,
    cookingTime,
    utensils,
    images
  };
};

export default connect(mapStateToProps, {
  setRecipeDetails,
  nextStep,
})(Preview);

var styles = StyleSheet.create({

  ImageSection: {
    flex: 5,
  },

  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  start: {
    fontSize: 30,
    opacity: 1,
    color: Colours.ColourPalette.VibrantBlue,
    textAlign: 'center'
  },

  Content: {
    flex: 1,
  },

  startBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: Colours.ColourPalette.VibrantBlue,
    borderWidth: 4,
    marginHorizontal: 70,
    borderRadius: 30,
    paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.70)'
  }

});
