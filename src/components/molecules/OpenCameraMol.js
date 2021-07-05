/* OPEN CAMERA MOL - USED TO OPEN THE CAMERA OR TO VIEW THE CAROUSEL OF IMAGES */

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Colours, Layouts, Typography } from './../../styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const OpenCameraMol = ({ navigation, images }) => {
  return (
    <View style={ styles.cameraContainer }>
      <TouchableOpacity style={ styles.cameraBox } onPress={ () => navigation.navigate('Camera') }>
        <Ionicons name="camera" size={ 50 } />
        <Text>Add</Text>
        <Text>Photos</Text>

      </TouchableOpacity>
      <TouchableOpacity style={ styles.cameraBox } onPress={ () => navigation.navigate('Carousel') }>
        <Ionicons name="image" size={ 50 } />
        <Text>See Photos</Text>
        <Text>{ images.length } Photos</Text>

      </TouchableOpacity>
    </View>);
};
const styles = StyleSheet.create({
  cameraContainer: {
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