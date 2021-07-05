/* RECIPE - DISPLAYS EACH STEP OF A RECIPE.
HANDLES THE PROGRESS BAR TIMER AND PAUSING 
HANDLES MOVING BETWEEN STEPS
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { setRecipeDetails, nextStep, resetSteps, getFutureSteps, previousStep } from './../../actions/RecipeActions';
import { Layouts, Typography } from './../../styles';
import { StepMol } from './../molecules';
import { ButtonAtom, StepAtom, ProgressAtom } from "./../atoms";
import { EatingTimeBarAtom } from "./../HeaderBars/EatingTimeBarAtom";
import { FlatList } from 'react-native-gesture-handler';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previousStep = this.previousStep.bind(this);

    this.state = {
      expanded: true,
      progress: 0,
      timePassed: 0,
      pause: false,
      image: null,
    };
  }

  componentDidMount() {
    this.timer();
    this.futureSteps();
  }

  next() {
    const { numOfSteps, steps, stepNumber, stepStartTime, estEatingTime, step, recipeName } = this.props;
    clearInterval(interval);
    if (stepNumber < numOfSteps - 1) {
      // If not the last step then get next step
      this.props.nextStep(steps, stepNumber + 1, estEatingTime, stepStartTime, step[ 'timeToComplete' ]); // In seconds

      this.props.navigation.push('RecipeScreen', {
        name: recipeName,
        time: estEatingTime.format('HH:mm'),
        stepNumber: stepNumber + 2, // because of zero index
      });
    }
  }

  previousStep() {
    const { steps, stepNumber, stepStartTime, estEatingTime, step, recipeName } = this.props;
    clearInterval(interval);
    if (stepNumber > 0) {
      // If not the last step then get next step
      this.props.previousStep(steps, stepNumber - 1, estEatingTime, stepStartTime, step[ 'timeToComplete' ] // In seconds
      );

      this.props.navigation.push('RecipeScreen', {
        name: recipeName,
        time: estEatingTime.format('HH:mm'),
        stepNumber: stepNumber + 2, // because of zero index
      });
    }
  }

  socialMedia = () => {
    clearInterval(interval);
    this.props.resetSteps();
    this.props.navigation.navigate('SocialMedia');
  };

  timer() {
    const { step } = this.props;

    interval = setInterval(() => {
      const { timePassed } = this.state;

      if (timePassed >= step.timeToComplete) {
        clearInterval(interval);
        this.next();
      }

      let progress = (timePassed + 0.5) / step.timeToComplete;

      this.setState({ progress, timePassed: timePassed + 0.5 });
    }, 500);

    this.setState({ interval });
  }

  // Pauses the step timer
  pause = () => {
    clearInterval(interval);
    this.setState({ pause: true });
  };

  // Unpauses the step timer
  unpause = () => {
    this.timer();
    this.setState({ pause: false });
  };

  futureSteps = () => {
    // fires action to get future steps
    this.props.getFutureSteps(this.props.steps, this.props.stepNumber);
  };

  showFutureStep(step) {
    return (
      <StepAtom step={ step.item } key={ step.index } stepNum={ step.index + this.props.stepNumber + 2 } />
    );
  };


  // Next step preview. Appears at the bottom
  previewNextStep = () => {
    const { stepNumber, numOfSteps, previewStep, futureSteps } = this.props;
    if (stepNumber == numOfSteps - 1) {
      return <ButtonAtom onPress={ this.socialMedia } title="Bon Appetit" />;
    } else if (previewStep) {
      return (
        <View style={ { flex: 2, borderTopColor: 'black', borderTopWidth: 1, marginTop: 2 } }>
          <FlatList
            data={ futureSteps }
            keyExtractor={ (step) => step.index }
            renderItem={ (step) => this.showFutureStep(step) }
          />
        </View>
      );
    }
  };

  render() {
    const { ready, step, estEatingTime, stepNumber, numOfSteps } = this.props;
    if (!ready) {
      return <Text>Loading</Text>;
    } else {
      return (
        <>
          <EatingTimeBarAtom eatingTime={ estEatingTime.format('HH:mm') } stepNumber={ stepNumber } numOfSteps={ numOfSteps } />
          <StepMol step={ step } stepNumber={ stepNumber } numOfSteps={ numOfSteps } />
          <ProgressAtom
            progress={ this.state.progress }
            skip={ this.next }
            back={ this.previousStep }
            onPause={ !this.state.pause ? this.pause : this.unpause }
          />
          {this.previewNextStep() }
        </>
      );
    }
  }
}

const mapStateToProps = (store) => {
  const {
    recipeName,
    steps,
    numOfSteps,
    ready,
    step,
    stepNumber,
    stepTime,
    EatingTime,
    estEatingTime,
    stepStartTime,
    previewStep,
    futureSteps
  } = store.RecipeReducer;

  return {
    recipeName,
    steps,
    numOfSteps,
    ready,
    step,
    stepNumber,
    stepTime,
    EatingTime,
    estEatingTime,
    stepStartTime,
    previewStep,
    futureSteps
  };
};

export default connect(mapStateToProps, {
  setRecipeDetails,
  nextStep,
  resetSteps,
  getFutureSteps,
  previousStep
})(Recipe);

var styles = StyleSheet.create({
  previewStep: {
    ...Typography.HeaderTitle,
    ...Layouts.SidePadding,
  }
});
