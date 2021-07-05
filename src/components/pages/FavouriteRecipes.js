/* FAVOURITE RECIPES - DISPLAYS ALL THE RECIPES FLAG AS FAVOURITES IN THE DATABASE */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipeDetails } from './../../actions/RecipeActions';
import { FavouriteCardAtom } from './../atoms/';

class FavouriteRecipes extends Component {
  constructor(props) {
    super(props);
    this.setRecipes = this.props.setRecipeDetails.bind(this);
  }

  render() {
    const { listRecipes, navigation } = this.props;
    return listRecipes.map((ele, i) => {
      if (ele.favourite) { // favourite filter
        return (
          <FavouriteCardAtom
            navigation={ navigation }
            key={ i }
            recipe={ ele }
            setRecAction={ this.setRecipes }
          />
        );
      }
    });
  }
}

const mapStateToProps = ({ RecipeListReducer }) => {
  const { ready, listRecipes } = RecipeListReducer;
  return {
    listRecipes,
    ready,
  };
};

export default connect(mapStateToProps, {
  setRecipeDetails,
})(FavouriteRecipes);
