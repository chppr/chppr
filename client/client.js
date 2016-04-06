import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

import Toolbar from "./components/Toolbar"
import CardFeed from "./components/CardFeed"

injectTapEventPlugin();

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      testVal: "Testing",
      auth: false,
      veg: false,
      category: "all",
      cardData: this.getCardData()
    };
  }
  changeVariable(testVal) {
    this.setState({testVal});
  }
  authToggle() {
    this.setState({auth: !this.state.auth});
  }
  vegToggle() {
    this.setState({veg: !this.state.veg});
  }
  categorySelect(category) {
    this.setState({category});
  }

  getCardData(){
    // TODO - Replace this with a database call
    return [
      {
        user_id: 1,
        category_id: 3,
        datetime: 1459536859876,
        food_item_name: "Bison Burger with Jalapeno",
        food_desc: "Fresh from Oregon Trail",
        restaurant_name: "Hut's Hamburgers",
        cost: 1325,
        picture: '/photoStorage/burger1.png',
        vegitarian: false,
        gluten_free: false,
        spicy: true
      },
      {
        user_id: 2,
        category_id: 1,
        datetime: 1459537259695,
        food_item_name: "Kiwi Spinach Smoothie",
        food_desc: "omg I got all my greens",
        restaurant_name: "Daily Juice",
        cost: 749,
        picture: '/photoStorage/kiwiSmoothie.png',
        vegitarian: true,
        gluten_free: true,
        spicy: false  
      },
      {
        user_id: 1,
        category_id: 2,
        datetime: 1459537364357,
        food_item_name: "Rack of Lamb with Mint Jelly",
        food_desc: "not as good as in auckland, but ok",
        restaurant_name: "Roaring Fork",
        cost: 2682,
        picture: '/photoStorage/lamb1.png',
        vegitarian: false,
        gluten_free: false,
        spicy: false 
      },
      {
        user_id: 3,
        category_id: 1,
        datetime: 1459536859876,
        food_item_name: "Carrot Ginger Cayenne Power Up",
        food_desc: "Worst. Diet. Ever.",
        restaurant_name: "JuiceLand",
        cost: 801,
        picture: '/photoStorage/juice1.png',
        vegitarian: true,
        gluten_free: true,
        spicy: true  
      },
      {
        user_id: 2,
        category_id: 2,
        datetime: 1459537552836,
        food_item_name: "Fish and Chips",
        food_desc: "I'd get this every day if I made mad developer money",
        restaurant_name: "B.D. Riley's",
        cost: 1455,
        picture: '/photoStorage/fishAndChips1.png',
        vegitarian: false,
        gluten_free: false,
        spicy: false  
      }
      ];
  }

  render() {
    console.log("client.js state:", this.state);
    return (
      <div>
        <p>YumSnap! Main Component</p>
        {/* Pass methods & state vars to Toolbar Component through props */}
        <Toolbar
          testVal={this.state.testVal}
          changeVariable={this.changeVariable.bind(this)}
          auth={this.state.auth}
          authToggle={this.authToggle.bind(this)}
          veg={this.state.veg}
          vegToggle={this.vegToggle.bind(this)}
          category={this.state.category}
          categorySelect={this.categorySelect.bind(this)}
        />
        <br/>
        <p>this.state.testVal is - {this.state.testVal}</p>
        <p>this.state.auth is - {String(this.state.auth)}</p>
        <p>this.state.veg is - {String(this.state.veg)}</p>
        <p>this.state.category is - {this.state.category}</p>
        <CardFeed
          cardData={this.state.cardData}
        />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
