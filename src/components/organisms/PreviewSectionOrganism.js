/* PREVIEW SECTION ORG - CONTAINS THE THREE PREVIEW BUTTONS AND LOGIC TO RENDER THE INGREDIENT/UTENSIL LISTS, RECIPE DESCRIPTION AND THE STEPS
   USED IN THE PREVIEW SCREEN
*/

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { ButtonGroupAtom, StepAtom, AboutAtom } from "../atoms/";
import { PreviewIngredients } from "../molecules/PreviewIngredients";
import { FlatList } from 'react-native-gesture-handler';

export const PreviewSectionOrganism = ({ ingredients, steps, utensils, description }) => {

  const [ preview, setPreview ] = useState(0);

  return (
    <View style={ styles.previewSection }>
      <ButtonGroupAtom
        setPreview={ setPreview }
        preview={ preview }
      />

      <View style={ styles.previewBox }>
        { showPreview({ preview }, ingredients, steps, utensils, description) }
      </View>
    </View>
  );
};

const showPreview = ({ preview }, ingredients, steps, utensils, description) => {
  switch (preview) {
    case 0: return showAbout(description);// Recipe description
    case 1: return showSteps(steps); // Steps
    case 2: return showIngredients(ingredients, utensils);// Ingredients/UTENSILS
    default:
      return <Text>Loading</Text>;
  }
};

const showAbout = (description) => {
  return <AboutAtom about={ description } />;
};

const showSteps = (steps) => {
  return (
    <FlatList
      data={ steps }
      keyExtractor={ (step) => step.index }
      renderItem={ (step) => showInstruction(step) }
    />
  );
};

const showIngredients = (ingredients, utensils) => {
  return <PreviewIngredients ingredients={ ingredients } utensils={ utensils } />;
};

const showInstruction = (step) => {
  return (
    <StepAtom step={ step.item } key={ step.index } stepNum={ step.index + 1 } />
  );
};

const styles = StyleSheet.create({
  previewBox: {
    flex: 5,
  },

  previewSection: {
    flex: 7,
  }
});