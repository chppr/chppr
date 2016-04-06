import React from "react";
import DishCard from "./Card"

export default class CardFeed extends React.Component {
  render() {
    return (
      <div>
        <h2>This will be the CardFeed Component</h2>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
      </div>
    );
  }
}
