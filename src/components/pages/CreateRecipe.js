/* CREATE RECIPE - CONDITIONALLY RENDERS EACH OF THE FORMS WHEN CREATING A RECIPE */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RecipeTitleFormOrg, IngredientsForm, UtensilsForm, StepForm } from "./../organisms/";

import { useNavigation } from '@react-navigation/native';

export const CreateRecipe = () => {

  const navigation = useNavigation();
  const [ form, setForm ] = useState('TITLE');

  const showForms = () => {
    switch (form) {
      case 'STEPS':
        return <StepForm formChange={ setForm } navigation={ navigation } />; // render step form
      case 'UTENSILS':
        return <UtensilsForm formChange={ setForm } />; // render utensil form
      case 'INGREDIENTS':
        return <IngredientsForm formChange={ setForm } />; // render ingredient form
      case 'TITLE':
        return <RecipeTitleFormOrg
          formChange={ setForm }
          navigation={ navigation }
        />; // render the title/description/camera form
      default:
        break;
    }
  };


  return (
    <>
      <View style={ styles.container }>
        { showForms() }
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 9,
  }
});