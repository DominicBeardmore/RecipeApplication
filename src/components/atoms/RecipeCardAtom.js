/* RECIPE CARD ATOM - CARD THAT APPEARS IN THE ALL RECIPES AND YOUR RECIPES SCREENS
   RENDERS A RECIPE AND ASSOCIATED INFORMATION
*/

import React, { Component } from 'react';
import { NavigationActions } from "react-navigation";
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Colours, Typography, Layouts } from '../../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const setRecipe = (setRecAction, recipe, navigation) => {
  setRecAction(recipe);

  navigation.navigate('FollowStack', {
    screen: 'Recipes', params: {
      screen: 'Preview',
      params: { name: recipe.recipeName }
    }
  });
};

export const RecipeCardAtom = ({ recipe, navigation, setRecAction }) => {
  return (
    <TouchableOpacity
      style={ styles.item }
      onPress={ () => setRecipe(setRecAction, recipe, navigation) }
    >
      <View style={ styles.recipesBox }>
        <View style={ { flex: 4 } }>
          <View style={ styles.header }>
            <Text style={ styles.headerText }>{ recipe.recipeName } </Text>
            <Ionicons
              style={ styles.icon }
              name={ recipe.favourite ? 'heart' : 'heart-outline' }
              size={ 30 }
              color={ Colours.ColourPalette.ContrastPink }
            />
          </View>
          <View style={ styles.StarRating }>
            <Rating
              imageSize={ 20 }
              readonly
              startingValue={ recipe.recipeRating.rating }
            />
            <Text> Rating { recipe.numOfRatings }</Text>
          </View>
          <View style={ styles.StarRating }>
            <Rating
              imageSize={ 20 }
              readonly
              startingValue={ recipe.diffRating.rating }
              ratingColor="#ff0000"
              type={ 'custom' }
            />
            <Text> Skill </Text>
          </View>
          <Text style={ { fontSize: 15 } }>{ recipe.diffRating.totalReviews }k reviews</Text>
          <View flexDirection="row">
            <Text>{ recipe.numOfSteps } steps </Text>
            <Ionicons name="md-list" size={ 22 } color="black" />
          </View>
          <View flexDirection="row">
            <Text>{ recipe.cookingTime } mins </Text>
            <Ionicons name="md-time" size={ 22 } color="black" />
          </View>
        </View>
        <View style={ styles.ImageBox }>
          <Image
            style={ styles.Image }
            source={ { uri: "data:image/png;base64," + recipe.images[ 0 ] } }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
  },
  recipesBox: {
    backgroundColor: Colours.White,
    borderRadius: 10,
    ...Layouts.BoxPadding,
    flexDirection: 'row',
  },
  StarRating: {
    flexDirection: 'row',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 6
  },
  ImageBox: {
    flex: 2,
    justifyContent: 'center'

  },
  Image: {
    flex: 0.1,
    width: undefined,
    height: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
