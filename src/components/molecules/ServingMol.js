/* SERVING MOL - DISPLAYS FURTHER INFOMATION ABOUT A RECIPE, THE COST, NUMBER OF SERVINGS, THE INGREDIENT/UTENSIL TOGGLE */

import React, { Component, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IoniconsAtom } from "../atoms/IconAtoms.js/IoniconsAtom";
import { ToggleAtom } from "./../atoms/ToggleAtom";

export const ServingMol = ({ setToggle, toggled }) => {
  return (
    <View style={ styles.iconContainer }>
      <View style={ styles.iconView }>
        <IoniconsAtom
          label="   X4"
          iconName="ios-person"
          size={ 30 }
          fontSize={ 20 }
        />
        <ToggleAtom
          toggle={ () => setToggle(!toggled) }
          toggled={ toggled }
          label="Utensil"
          size={ 30 }
        />
      </View>

      <View style={ styles.iconView }>
        <IoniconsAtom
          label="   Cost"
          iconName="logo-usd"
          size={ 30 }
          fontSize={ 20 }

        />
        <IoniconsAtom
          label="   Instock"
          iconName="ios-clipboard"
          size={ 30 }
          fontSize={ 20 }

        />
      </View>
    </View>
  );
};

export default ServingMol;

const styles = StyleSheet.create({
  iconView: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2
  }
});