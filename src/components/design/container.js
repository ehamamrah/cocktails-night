import React from 'react';
import axios from 'axios';

export default class Collector extends React.Component {
  state={
    drinks: [],
    drink: [],
  };

  componentDidMount() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    axios.get(url)
      .then(res => {
        const drinks = res.data['drinks'];
        this.setState({ drinks });
      })
  }

  render() {
    return (
      <>
        <div className="album py-5 bg-light-gray">
          <div className="container">
            <div className="row">
              { this.state.drinks.map(drink =>
                <div className="col-3">
                  <div className="card mb-4 shadow-sm rounded">
                    <div className="text-center pt-2">
                      <img className="bd-placeholder-img card-img-top shadow rounded-circle text-center" src={drink.strDrinkThumb} role="img" aria-label="Placeholder: Thumbnail" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{drink.strDrink}</h5>
                      <p className="card-text text-justify text-truncate">{drink.strInstructions}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{drink.strAlcoholic}, {drink.strGlass}</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
