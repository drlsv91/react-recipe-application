import React, { Component } from "react";
class Recipe extends Component {
  render() {
    const {
      image_url,
      recipe_id,
      title,
      source_url,
      publisher
    } = this.props.recipe;
    return (
      <React.Fragment>
        {/* {console.log(recipe)} */}
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card-top"
              style={{ height: "14rem" }}
              alt="recipe"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary text-capitalize">
                details
              </button>
              <a
                href={source_url}
                className="btn btn-success mx-2 tex-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Recipe;
