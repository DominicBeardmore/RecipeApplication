/* UTENSIL FORM - RENDERS THE UTENSIL FORM */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UtensilsMol } from "./../molecules/FormMolecules/UtensilsMol";
import { ButtonAtom } from "./../atoms/ButtonAtom";
import { View, Text } from 'react-native';

export const UtensilsForm = ({ navigation, formChange }) => {

  const utensils = useSelector(state => state.CreateRecipeReducer.utensils);

  return (
    <>
      <View style={ { flex: 10 } }>
        <UtensilsMol utensils={ utensils } />
      </View>
      <ButtonAtom
        disabled={ utensils.length <= 0 }
        title={ "Add Steps" }
        onPress={ () => formChange("STEPS") }
      />
    </>
  );
};