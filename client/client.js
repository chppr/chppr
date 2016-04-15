import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import moment from 'moment';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddCard from "./components/AddCard";
import CardFeed from "./components/CardFeed";
//import DishCard from "./components/Card"

import fetch from "node-fetch";
import $ from 'jquery';

injectTapEventPlugin();

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      veg: false,
      gf: false,
      noSpice: false,
      category: null,
      cardData: [],
      showHead: true,
      showAdd: false,
      showFavs: false,
      dishName: '',
      restaurantName: '',
      dishDescription: '',
      dishPrice: '',
      dishRating: '',
      vegClick: false,
      gfClick: false,
      spicyClick: false,
      photo: null,
      dishCat: 999,
      priceError: '',
      catError: '',
      photoError: '',
      ratingError: '',
      restaurantError: '',
      dishNameError: '',
      categories:['Mexican','American','Asian','Italian','BBQ'],
      currentUserName: '',//added to show or remove delete button by pj
      currentUser: '',
      currentAvatar: ''
    };

      this.getCardData();
    }


    stateToggle(event) {
      this.setState({
        [event]: !this.state[event] });
      this.setState({ priceError: '' });
      this.setState({ catError: '' });
      this.setState({ photoError: '' });
      this.setState({ ratingError: '' });
      this.setState({ restaurantError: '' });
      this.setState({
        dishNameError: '',
        dishName: '',
        dishCat: 999,
        restaurantName: '',
        dishDescription: '',
        dishPrice: '',
        dishRating: '',
        photo: null
      });
    }

    categorySelect(category) {
        this.setState({ category });
      }
      // photoInput(files) {
      //   this.setState({photo: files});
      // }
    dishNameInput(dishName) {
      this.setState({ dishName: dishName });
    }
    restaurantNameInput(restaurantName) {
        this.setState({ restaurantName: restaurantName });
      }
      // dishDescriptionInput(dishDescription) {
      //   this.setState({dishDescription: dishDescription});
      // }
    dishPriceInput(dishPrice) {
      this.setState({ dishPrice: dishPrice });
    }
    dishRatingInput(dishRating) {
      this.setState({ dishRating: dishRating });
    }
    vegInput() {
      this.setState({ vegClick: !this.state.vegClick });
    }
    gfInput() {
      this.setState({ gfClick: !this.state.gfClick });
    }
    spicyInput() {
      this.setState({ spicyClick: !this.state.spicyClick });
    }
    photoAdd(url) {
      this.setState({ photo: url });
    }
    catAdd(category) {
      this.setState({ dishCat: category });
    }
    addCardValidation() {
      var flag = true;
      if (this.state.dishCat === 999) {
        this.setState({ catError: "Restaurant Catagory required" });
        flag = false;
      } else {
        this.setState({ catError: '' });
      }
      if (!this.state.dishName) {
        this.setState({ dishNameError: "Dish Name required" });
        flag = false;
      } else {
        this.setState({ dishNameError: '' });
      }
      if (!this.state.dishPrice || Number(this.state.dishPrice) < 0 || Number(this.state.dishPrice) === 0 || Number(this.state.dishPrice) > 999999 || isNaN(Number(this.state.dishPrice))) {
        if (!this.state.dishPrice) {
          this.setState({ priceError: "Dish Price required" });
        } else if (isNaN(Number(this.state.dishPrice))) {
          this.setState({ priceError: "Dish Price must be a number" });
        } else if (Number(this.state.dishPrice) < 0 || Number(this.state.dishPrice) === 0) {
          this.setState({ priceError: "Dish Price must be greater than zero" });
        } else if (Number(this.state.dishPrice) > 999999) {
          this.setState({ priceError: "We dont show dishes over $1,000,000" });
        }
        flag = false;
      } else {
        this.setState({ priceError: "" });
      }
      if (isNaN(Number(this.state.dishRating)) || !this.state.dishRating || Number(this.state.dishRating) < 0 || Number(this.state.dishRating > 5) || Math.floor(Number(this.state.dishRating)) !== Number(this.state.dishRating)) {
        if (!this.state.dishRating) {
          this.setState({ ratingError: "Dish Rating Required" });
        } else if (isNaN(Number(this.state.dishRating))) {
          this.setState({ ratingError: "Dish Rating must be a number" });
        } else if (Number(this.state.dishRating) < 0 || Number(this.state.dishRating > 5)) {
          this.setState({ ratingError: "Dish Rating must between 0 and 5" });
        } else if (Math.floor(Number(this.state.dishRating)) !== Number(this.state.dishRating)) {
          this.setState({ ratingError: "Dish Rating must be a whole number" });
        }
        flag = false;
      } else {
        this.setState({ ratingError: "" });
      }
      if (!this.state.photo) {
        this.setState({ photoError: "Dish Photo URL required" });
        flag = false;
      } else {
        this.setState({ photoError: "" });
      }
      if (!this.state.restaurantName) {
        this.setState({ restaurantError: "Restaurant Name required" });
        flag = false;
      } else {
        this.setState({ restaurantError: "" });
      }

      console.log('returning flag', flag);

      return flag;

    }
    deleteCard(card) {
      var that = this;
      var sendCard = {
        "postID": card.postID
      };
      $.ajax({
          type: "DELETE",
          url: "/delete",
          data: sendCard
        })
        .done(function() {
          that.getCardData();
        });
    }
    addCardSubmit() {

      var that = this;

      var test = that.addCardValidation();
      console.log('tested flag', test);
      if (!test) {
        console.log('pjtestDONE');
        return;
      }


      var newDish = {
        // TODO - figure out categories and users
        "user_id": this.state.currentUser,
        "category": this.state.dishCat,
        "timestamp": moment().format(),
        "dish_name": this.state.dishName,
        "rest_name": this.state.restaurantName,
        "price": Number(this.state.dishPrice),
        "picture_path": this.state.photo,
        "veggie": this.state.vegClick,
        "gluten_free": this.state.gfClick,
        "spicy": this.state.spicyClick,
        "rating": this.state.dishRating
      }


      var file = {
        photo: that.state.photo[0]
      }

      // fetch('http://localhost:4000/upload', {
      //   method: 'POST',
      //   body: 'test'
      // })
      // .then(function() {
      //   console.log("I think the file saved?");
      // })
      // .catch(function(err) {
      //   console.log("Yo, I'm pretty sure something didn't work...:", err);
      // })

      ////// VERY HACKY FIX //////
      if (this.state.dishRating !== '') {

        $.ajax({
            type: "POST",
            url: "/feed",
            data: newDish,
            // cache: false,
            // processData: false,
            // contentType: false
          })
          .done(function() {
            console.log("New dish posted");
            that.state.cardData.unshift(newDish);
            that.setState({ showAdd: false });
            that.setState({
              dishName: '',
              restaurantName: '',
              dishDescription: '',
              dishPrice: '',
              dishRating: '',
              vegClick: false,
              gfClick: false,
              spicyClick: false,
              photo: null,
              dishCat: 999,
              priceError: '',
              catError: '',
              photoError: '',
              ratingError: '',
              restaurantError: '',
              dishNameError: ''
            });
          })
          .fail(function() {
            console.log("Failed to post new dish");
          });
          that.getCardData();
      }
    }


  getCardData(){
    var that = this;
    $.ajax({
      type: 'GET',
      url: '/feed',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({cardData: data})
        console.log('Data received', data);
        //route not ready yet
        $.ajax({
          type:"GET",
          url:"/userstate",
          dataType: 'json'
        }).then(function(resp){
        console.log('pjpjpjpjpjpjp',resp)
        //{user: "pmatteu2", passid: "15724258"}
        that.setState({currentUser: resp.userId})
        that.setState({currentUserName: resp.user})
        that.setState({currentAvatar:resp.profile_picture})
        console.log("PJPJPJ121212", resp.profile_picture)
       })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('getCardData failed, status: ', status, 'error: ', err);
      }.bind(this)
    });   
  }


    render() {

      // console.log("client.js state:", this.state);
      return ( < div > { /* Pass methods & state vars to Toolbar Component through props */ } 
        < Navbar auth = { this.state.auth }
        currentUser = { this.state.currentUser }
        veg = { this.state.veg }
        gf = { this.state.gf }
        noSpice = { this.state.noSpice }
        showAdd = { this.state.showAdd }
        showFavs = { this.state.showFavs }
        category = { this.state.category }
        categorySelect = { this.categorySelect.bind(this) }
        stateToggle = { this.stateToggle.bind(this) }
        currentAvatar = {this.state.currentAvatar}
        /> {
          this.state.showAdd ? < AddCard
          dishNameInput = { this.dishNameInput.bind(this) }
          restaurantNameInput = { this.restaurantNameInput.bind(this) }
          // dishDescriptionInput={this.dishDescriptionInput.bind(this)}
          dishPriceInput = { this.dishPriceInput.bind(this) }
          dishRatingInput = { this.dishRatingInput.bind(this) }
          vegInput = { this.vegInput.bind(this) }
          gfInput = { this.gfInput.bind(this) }
          spicyInput = { this.spicyInput.bind(this) }
          addCardSubmit = { this.addCardSubmit.bind(this) }
          // photoInput={this.photoInput.bind(this)}
          photo = { this.state.photo ? this.state.photo[0].preview : null }
          photoAdd = { this.photoAdd.bind(this) }
          showAdd = { this.state.showAdd }
          catAdd = { this.catAdd.bind(this) }
          dishCat = { this.state.dishCat }
          priceError = { this.state.priceError }
          catError = { this.state.catError }
          photoError = { this.state.photoError }
          ratingError = { this.state.ratingError }
          restaurantError = { this.state.restaurantError }
          dishNameError = { this.state.dishNameError }
          /> : null } < CardFeed
          boolVeg = { this.state.veg }
          boolGF = { this.state.gf }
          boolNoSpice = { this.state.noSpice }
          cardData = { this.state.cardData }
          deleteCard = { this.deleteCard.bind(this) } 
          category = { this.state.category }
          categories = { this.state.categories }
          currentUser = { this.state.currentUser }
          /> < /div>
        );
      }
    }

    const app = document.getElementById('app');

    ReactDOM.render( < Layout / > , app);
