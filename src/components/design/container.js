import React from 'react';
import axios from 'axios';

function GetDrink(drink_name='') {
  const drink_details_link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink_name;
  axios.get(drink_details_link)
    .then(res => {
      const details = res.data;
      const drink_details = details['drinks'][0];
      return drink_details;
    })
}

export default class Collector extends React.Component {
  state={
    drinks: [],
    drinks_details: ''
  };

  componentDidMount() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
      .then(res => {
        const drinks = res.data['drinks'];
        this.setState({ drinks });
      })
  }

  render() {
    return (
      <>
      <div className="container">
        <div className="row">
          { this.state.drinks.map(drink => <div className="album py-5 bg-light">
            {/* { const drink_details = GetDrink(drink.strDrink) } */}
            <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={drink.strDrinkThumb} role="img" aria-label="Placeholder: Thumbnail" />
                    <div className="card-body">
                    <h5 className="card-title">{drink.strDrink}</h5>
                    <h6>{this.drink_details}</h6>
                    {/* <h6 className="card-subtitle mb-2 text-muted">{this.drink_details.strAlcoholic}</h6> */}
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-warning">Read More ..</button>
                        </div>
                        <small className="text-muted"></small>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
      </>
    );
  }
}
