/* IMAGE CAROUSEL MOL - RENDERS EACH OF THE IMAGES A USER MAY ADD TO A RECIPE IN A LIST */

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { ImageAtom } from "../atoms";
import { useSelector } from "react-redux";

const showImage = (image) => {
  return <ImageAtom imageSource={ image } />;
};

export const ImageCarouselMol = ({ }) => {

  const images = useSelector(state => state.CreateRecipeReducer.images);
  return (
    <View style={ styles.carourselContainer }>
      <FlatList
        data={ images }
        keyExtractor={ (image) => { image.index; } }
        renderItem={ (image) => showImage(image) }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carourselContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  cameraBox: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});