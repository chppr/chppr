import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from "./components/Navbar"
import AddCard from "./components/AddCard"
import CardFeed from "./components/CardFeed"

injectTapEventPlugin();

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      veg: false,
      gf: false,
      noSpice: false,
      category: "all",
      cardData: this.getCardData(),
      showAdd: false,
      showFavs: false
    };

  // ToDo: Refactor all Toggle functions to generic toggle w/ parameter
  }
  authToggle() {
    this.setState({auth: !this.state.auth});
  }
  showAddToggle() {
    this.setState({showAdd: !this.state.showAdd});
  }
  vegToggle() {
    this.setState({veg: !this.state.veg});
  }
  gfToggle() {
    this.setState({gf: !this.state.gf});
  }
  noSpiceToggle() {
    this.setState({noSpice: !this.state.noSpice});
  }
  showFavsToggle() {
    this.setState({showFavs: !this.state.showFavs});
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
      },
      {
        user_id: 2,
        category_id: 2,
        datetime: 1459537552836,
        food_item_name: "Irish Stew",
        food_desc: "Classic Irish cuisine. Because the Irish are know for their food.",
        restaurant_name: "B.D. Riley's",
        cost: 1595,
        picture: '/photoStorage/irish_stew.png',
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
        {/* Pass methods & state vars to Toolbar Component through props */}
        <Navbar
          auth={this.state.auth}
          authToggle={this.authToggle.bind(this)}
          veg={this.state.veg}
          vegToggle={this.vegToggle.bind(this)}
          gf={this.state.gf}
          gfToggle={this.gfToggle.bind(this)}
          noSpice={this.state.noSpice}
          noSpiceToggle={this.noSpiceToggle.bind(this)}
          category={this.state.category}
          categorySelect={this.categorySelect.bind(this)}
          showAdd={this.state.showAdd}
          showAddToggle={this.showAddToggle.bind(this)}
          showFavs={this.state.showFavs}
          showFavsToggle={this.showFavsToggle.bind(this)}
        />
        <br/>
        <p>
        state.category - {this.state.category}   |   
        state.veg - {String(this.state.veg)}   |   
        state.gf - {String(this.state.gf)}   |   
        state.noSpice - {String(this.state.noSpice)}   |   
        state.showFavs - {String(this.state.showFavs)}   |   
        state.auth - {String(this.state.auth)}
        </p>
        { this.state.showAdd ? <AddCard/> : null }
        <hr/>
        <CardFeed
          cardData={this.state.cardData}
        />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
