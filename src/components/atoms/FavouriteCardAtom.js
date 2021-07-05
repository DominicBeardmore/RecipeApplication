/* FAVOURITE CARD ATOM - RECIPE CARD REFERENCED IN THE FAVOURITES PAGE */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Colours, Typography, Layouts } from '../../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const setRecipe = (setRecAction, recipe, navigation) => {
  setRecAction(recipe);
  navigation.navigate('Preview', { name: recipe.recipeName });
};

const FavouriteCardAtom = ({ recipe, navigation, setRecAction }) => {
  return (
    <TouchableOpacity
      style={ styles.item }
      onPress={ () => setRecipe(setRecAction, recipe, navigation) }
    >

      <View style={ { flex: 4 } }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>{ recipe.recipeName } </Text>
        </View>
        <Text>Last Cooked 20th - Feb</Text>
        <Text>Your rating</Text>
        <View style={ styles.StarRating }>
          <Rating
            imageSize={ 20 }
            readonly
            startingValue={ recipe.recipeRating.rating }
          />
          <Text> Rating</Text>
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

        <View styles={ styles.details }>
          <View style={ styles.stepBox }>
            <Text>{ recipe.numOfSteps } steps </Text>
            <Ionicons name="md-list" size={ 22 } color="black" />
          </View>
          <View flexDirection="row" style={ styles.timingBox }>
            <Text>{ recipe.cookingTime } mins </Text>
            <Ionicons name="md-time" size={ 22 } color="black" />
          </View>
        </View>
      </View>

      <View style={ styles.ImageBox }>
        <Image
          style={ styles.Image }
          source={ { uri: "data:image/png;base64," + recipe.images[ 0 ] } }

        />
      </View>
    </TouchableOpacity>
  );
};

export { FavouriteCardAtom };

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    backgroundColor: Colours.White,
    borderRadius: 15,
    ...Layouts.BoxPadding,
    flexDirection: 'row',
  },
  details: {
    flexDirection: 'row',
  },
  StarRating: {
    flexDirection: 'row',
  },

  stepBox: {
    flexDirection: 'row',
    flex: 2,
  },

  timingBox: { flex: 2 },

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
    flex: 0.8,
    width: undefined,
    height: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
