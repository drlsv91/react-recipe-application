import React, { Component } from "react";
import { recipeData } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  state = {
    recipes: recipeData,
    url:
      "https://www.food2fork.com/api/search?key=beca138db76bb1886265c35e324257c3"
  };
  // getRecipes = async () => {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };
  // componentDidMount() {
  //   this.getRecipes();
  // }
  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList recipes={this.state.recipes} />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
