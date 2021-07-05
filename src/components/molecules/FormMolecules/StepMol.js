/* STEP MOL - DISPLAYS EACH OF THE INPUTS OF EACH OF THE STEPS */


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layouts, Typography, Colours } from './../../../styles';
import { FlatList } from 'react-native-gesture-handler';
import { addStep, updateStep } from "./../../../actions/CreateRecipeActions";
import { useDispatch, useSelector } from 'react-redux';
import { StepInputAtom, HelpTextAtom, FormButtonAtom, CardHeaderAtom } from '../../atoms/FormAtoms/';

export const StepMol = ({ steps, val }) => {
  const dispatch = useDispatch();

  const showStep = (step) => {
    return (
      <StepInputAtom
        primaryHandler={ (text) => dispatch(updateStep(step.index, text, step.item.timeToComplete)) }
        secondaryHandler={ (text) => dispatch(updateStep(step.index, step.item.instruction, text)) }
        stepNumber={ step.index + 1 }
        primaryVal={ step.item.instruction }
        secondaryVal={ step.item.timeToComplete }
        multiline={ true }
        primaryPlaceholder="Instruction"
        secondaryPlaceholder="Time for this step in minutes"
        maxLength={ 500 }
        minHeight={ 350 }
      />
    );
  };

  return (
    <>
      <CardHeaderAtom cardHeader={ "Adding Steps" } />
      <HelpTextAtom text={ "Add each of the steps for this recipe. Make sure to specify how long each takes in minutes" } />
      <View style={ { flex: 10, marginTop: 5 } }>
        <FlatList
          keyExtractor={ (step) => { step.index; } }
          data={ steps }
          renderItem={ (step) => showStep(step) }
        />
      </View>
      <FormButtonAtom
        title="Add Step"
        disabled={ false }
        onPress={ () => dispatch(addStep()) }
      />
    </>
  );
};


const styles = StyleSheet.create({
  Card: {
    ...Typography.PreviewFont,
    ...Layouts.SidePadding,
    flexDirection: 'column',
    maxHeight: 300,
    marginVertical: 20,
  },
  helpText: {
    ...Layouts.SidePadding,
    ...Typography.PreviewFont,
  },
});