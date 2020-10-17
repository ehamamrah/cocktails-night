import React from 'react';
import axios from 'axios';
import Drink from './container';


export default class Collector extends React.Component {
  state={
    drinks: [],
  };

  componentDidMount() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    // const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    axios.get(url)
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
            { this.state.drinks.map(drink =>
              < Drink drink_name={drink.strDrink}/>
            )}
          </div>
        </div>
      </>
    );
  }
}
