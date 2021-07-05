/* ALL RECIPES - LIST OF ALL RECIPES */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { RecipeCardAtom } from '../atoms';
import { connect } from 'react-redux';
import { loadRecipes, fetchRecipes } from '../../actions/RecipeListActions';
import { setRecipeDetails } from '../../actions/RecipeActions';
import { FlatList } from 'react-native-gesture-handler';

class AllRecipes extends Component {
  constructor(props) {
    super(props);
    this.setRecipes = this.props.setRecipeDetails.bind(this);
  }


  componentDidMount() {
    this.props.loadRecipes(require('./../../../listOfRecipes.json')); // Calls the JSON
    // this.props.fetchRecipes(); // Calls the API
  }

  displayRecipe = (recipe, navigation) => {
    return (
      <RecipeCardAtom
        key={ recipe.index }
        navigation={ navigation }
        recipe={ recipe.item }
        setRecAction={ this.setRecipes }
      />
    );
  };

  render() {
    const { listRecipes, navigation } = this.props;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={ listRecipes }
          keyExtractor={ (recipe) => { recipe.index; } }
          renderItem={ (recipe) => this.displayRecipe(recipe, navigation) }
        />
      </>
    );
  }
};

function mapStateToProps({ RecipeListReducer }) {
  const { ready, listRecipes } = RecipeListReducer;
  return {
    listRecipes: listRecipes,
    ready,
  };
}

export default connect(mapStateToProps, {
  loadRecipes,
  setRecipeDetails,
  fetchRecipes,
})(AllRecipes);