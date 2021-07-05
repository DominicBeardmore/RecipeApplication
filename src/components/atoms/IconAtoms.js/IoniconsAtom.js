import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const IoniconsAtom = ({ label, iconName, size, fontSize, labelFirst = false, colour = 'black' }) => {

  if (labelFirst) {
    return (
      <View style={ styles.iconView }>
        <Text style={ styles.iconText, { fontSize: fontSize, color: colour } }>{ label }</Text>
        <Ionicons
          name={ iconName }
          size={ size }
          color={ colour }
        />
      </View>
    );
  } else {
    return (
      <View style={ styles.iconView }>
        <Ionicons
          name={ iconName }
          size={ size }
          color={ colour }
        />
        <Text style={ styles.iconText, { fontSize: fontSize, color: colour } }>{ label }</Text>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  iconView: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  iconText: {
    // paddingRight: 10,
  }
});
