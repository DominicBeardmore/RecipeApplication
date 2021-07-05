/* IMAGE ATOM - APPEARS IN THE CAROUSEL MOL */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

export const ImageAtom = ({ imageSource }) => {
  return (
    <Image
      style={ styles.image }
      key={ imageSource.index + 1 }
      source={ { uri: 'data:image/png;base64,' + imageSource.item } }
    />

  );
};
const styles = StyleSheet.create({
  cameraContainer: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  image: {
    marginBottom: 30,
    height: 500,
    width: 500,
    resizeMode: 'cover'
  }
});