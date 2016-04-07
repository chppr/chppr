import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

export default class AddCard extends React.Component {

  render() {
    return (
      <div>
        <h2>Add Card Form Here</h2>
        <h4>Enter Name of Dish</h4>
        <h4>Enter Name of Restaurant</h4>
        <h4>Enter Description of Dish</h4>
        <h4>Enter Price of Dish</h4>
        <h4>Enter Rating of Dish</h4>
        <h4>| veg | gf | spicy |</h4>
        <RaisedButton label="Upload Image" default={true} />  
      </div>
    );
  }
}