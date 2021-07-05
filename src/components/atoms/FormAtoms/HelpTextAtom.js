/* HELP TEXT - APPEARS ABOVE EACH OF THE FORMS WITH HELP TEXT. COMPONENT CAN BE DISSMISSED FROM THE SCREEN */

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Layouts, Typography } from "../../../styles";

export const HelpTextAtom = ({ text }) => {

  const [ hideMsg, setHideMsg ] = useState(false);
  if (!hideMsg) {
    return (
      <View style={ styles.helpBox }>
        <Ionicons name="close" size={ 20 } onPress={ () => setHideMsg(true) } />
        <Text style={ styles.helpText }>{ text }</Text>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  helpBox: {
    flexDirection: 'row',
    ...Layouts.SidePadding,
    ...Layouts.TopMargin,
    ...Layouts.BottomMargin,
    ...Layouts.MarginHorizontal,
    ...Layouts.RoundedEdges,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  helpText: {
    ...Typography.PreviewFont,
    marginHorizontal: 10

  }
});

