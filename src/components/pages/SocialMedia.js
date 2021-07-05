/* SOCIAL MEDIA - APPEARS ONCE A USER HAS COMPLETED A RECIPE
DISPLAYS A SLIDER FOR THE USER TO RATE THE DIFFICULTY AND THE QUALITY OF THE RECIPE
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { Colours, Layouts } from '../../styles/';
import { Rating, Button } from 'react-native-elements';
import { updateDifficultyRating, updateRecipeRating } from '../../actions/RecipeActions';

class SocialMedia extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.setOptions({ title: 'Bon Appetit' });
  }

  updateDifficulty = (rating) => {
    this.props.updateDifficultyRating(rating);
  };

  updateRating = (rating) => {
    this.props.updateRecipeRating(rating);
  };

  submitReview = () => {
    this.props.navigation.navigate('Recipes');
  };

  render() {
    const { userRatedDifficulty, userRecipeRating, images } = this.props;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={ styles.content }>
          <ImageBackground style={ styles.carousel } source={ { uri: "data:image/png;base64," + images[ 0 ] } } />

          <View style={ styles.reviewBox }>

            <View style={ styles.starRating }>
              <Rating
                imageSize={ 20 }
                startingValue={ 0 }
                style={ styles.stars }
                imageSize={ 60 }
                onFinishRating={ this.updateRating }
              />

              <Text style={ styles.ratingPrompt }>Your recipe rating</Text>
            </View>
            <View style={ styles.starRating }>
              <Rating
                imageSize={ 20 }
                startingValue={ 0 }
                style={ styles.stars }
                imageSize={ 60 }
                ratingColor="#ff0000"
                type="custom"
                onFinishRating={ this.updateDifficulty }
              />

              <Text style={ styles.ratingPrompt }>
                Your recipe difficulty rating
              </Text>
            </View>
            <View style={ styles.submitReview }>
              <Button
                buttonStyle={ styles.yesBtn }
                title="Submit Review"
                onPress={ this.submitReview }
                disabled={ !userRatedDifficulty || !userRecipeRating }
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  const { userRatedDifficulty, userRecipeRating, images } = store.RecipeReducer;
  return {
    images,
    userRatedDifficulty,
    userRecipeRating,
  };
};

export default connect(mapStateToProps, {
  updateRecipeRating,
  updateDifficultyRating,
})(SocialMedia);

const styles = StyleSheet.create({
  container: {
    ...Layouts.VerticalContainer,
    backgroundColor: Colours.White,
  },
  content: {
    flex: 11,
    justifyContent: 'center',
  },

  carousel: {
    backgroundColor: 'red',
    flex: 3,
  },

  reviewBox: {
    flex: 2,
    ...Layouts.BoxPadding,
    ...Layouts.BorderTop,
    ...Layouts.BorderBottom,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
  },

  starRating: {
    flexDirection: 'column',
    flex: 3,
  },

  stars: {
    paddingBottom: 5,
  },
  ratingPrompt: {
    textAlign: 'center',
  },

  submitReview: {
    flex: 1,
    marginBottom: 10,
    justifyContent: 'center',
  },

  yesBtn: {
    marginHorizontal: 50,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});
