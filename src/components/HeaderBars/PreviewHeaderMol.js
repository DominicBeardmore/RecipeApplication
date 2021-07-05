/* PREVIEW HEADER BAR - MAIN HEADER BAR WHEN PREVIEWING A RECIPE */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { makeFav, removeFav } from '../../actions/RecipeActions';
import { HeartAtom } from "../atoms/HeartAtom";

class PreviewHeaderMol extends Component {

  render() {
    return (
      <View style={ styles.header }>
        <View style={ styles.statusBar }>
          <Text style={ styles.textStyle }>{ this.props.title }</Text>
        </View>
        <HeartAtom favourite={ this.props.favourite } favBtn={ this.props.favourite ? this.props.removeFav : this.props.makeFav } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { favourite } = state.RecipeReducer;

  return { favourite };
};

export default connect(mapStateToProps, {
  makeFav,
  removeFav,
})(PreviewHeaderMol);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  statusBar: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
  icon: {
    flex: 1,
  },
});
