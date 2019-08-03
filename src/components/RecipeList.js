import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
class RecipeList extends Component {
  state = {};
  render() {
    const { recipes } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch />
        {/* {console.log(recipes)} */}
        {/* title start */}
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
        </div>
        {/* title end */}
        <div className="row">
          {recipes.map(recipe => {
            return <Recipe key={recipe.recipe_id} recipe={recipe} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeList;
