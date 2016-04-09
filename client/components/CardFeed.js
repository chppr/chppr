import React from "react";
import DishCard from "./Card"

export default class CardFeed extends React.Component {
  matchesUserFilters(c) {
    if (this.props.boolNoSpice && c.spicy) return false;
    if (this.props.boolGF && c.gluten_free === false) return false;
    if (this.props.boolVeg && c.vegetarian === false) return false;
    console.log('in matchesUserFilters, card is:',c);
    return true;
  }

  render() {
    return (
      <div>
        <h2>This will be the CardFeed Component</h2>
        <p>Number of cards is: {this.props.cardData.length}</p>
        {this.props.cardData.map((card) => this.matchesUserFilters(card) ? <DishCard data={card} /> : null)}
      </div>
    );
  }
}
