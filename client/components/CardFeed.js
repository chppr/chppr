import React from "react";
import DishCard from "./Card"

export default class CardFeed extends React.Component {

  render() {
    return (
      <div>
        <h2>This will be the CardFeed Component</h2>
        <p>Number of cards is: {this.props.cardData.length}</p>
        <DishCard
          data={this.props.cardData[0]}
        />
        <DishCard
          data={this.props.cardData[1]}
        />
        <DishCard
          data={this.props.cardData[2]}
        />
        <DishCard
          data={this.props.cardData[3]}
        />
        <DishCard
          data={this.props.cardData[4]}
        />
      </div>
    );
  }
}
