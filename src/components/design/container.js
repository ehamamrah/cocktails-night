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

  getDrink(drinkName){
    const drink_details_link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName;
    axios.get(drink_details_link)
      .then(res => {
        const details = res.data;
        const drink = details['drinks'][0];
        this.setState({ drink });
      })
  }

  render() {
    return (
      <>
        <div className="album py-5 bg-light-gray">
          <div className="container">
            <div className="row">
              { this.state.drinks.map(drink =>
                <div className="col-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="bd-placeholder-img card-img-top shadow-sm rounded-top" width="100%" height="225" src={drink.strDrinkThumb} role="img" aria-label="Placeholder: Thumbnail" />
                    <div className="card-body">
                    <h5 className="card-title">{drink.strDrink}</h5>
                      <p className="card-text text-justify text-truncate">{drink.strInstructions}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-warning">Read More ..</button>
                        </div>
                        {/* { this.getDrink(drink.strDrink) } */}
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
