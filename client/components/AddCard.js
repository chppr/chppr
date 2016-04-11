import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';
import Dropzone from "react-dropzone";
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';

export default class AddCard extends React.Component {

  // onDrop (files) {
  //   console.log('Received file(s): ', files);
  //   this.props.photoInput(files);
  // }
  handleDishName(e) {
    this.props.dishNameInput(e.target.value);
  }
  handleRestaurantName(e) {
    this.props.restaurantNameInput(e.target.value);
  }
  // handleDishDescription(e) {
  //   this.props.dishDescriptionInput(e.target.value);
  // }
  handleDishPrice(e) {
    this.props.dishPriceInput(e.target.value);
  }
  handleDishRating(e) {
    this.props.dishRatingInput(e.target.value);
  }
  handleVegClick() {
    window.setTimeout(this.props.vegInput, 0);
  }
  handleGFClick() {
    window.setTimeout(this.props.gfInput, 0);
  }
  handleSpicyClick() {
    window.setTimeout(this.props.spicyInput, 0);
  }
  handleSubmit() {
    this.props.addCardSubmit();
  }
  handlePhoto(e) {
    this.props.photoAdd(e.target.value);
  }

  render() {

    const styles = {
      checkbox: {
        maxWidth: 150,
        marginTop: 16,
        // paddingLeft: 10,
      },
      dropzone: {
        // float: 'left'
      },
      block: {
        display: 'inline-block',
        paddingLeft: 10,
      },
      text: {
        padding: 5
      },
      boxes: {
        // float: 'left'
      }
    };

    return (
      <div style={styles.block}>

        <div style={styles.boxes}>
          <TextField
            onChange={this.handlePhoto.bind(this)}
            floatingLabelText="Enter URL for your photo"
          /><br/>
          <TextField
            onChange={this.handleDishName.bind(this)}
            floatingLabelText="Enter Name of Dish"
          /><br/>
          <TextField
            onChange={this.handleRestaurantName.bind(this)}
            floatingLabelText="Enter Name of Restaurant"
          /><br/>
          <TextField
            onChange={this.handleDishPrice.bind(this)}
            floatingLabelText="Enter Price of Dish"
          /><br/>
          <TextField
            onChange={this.handleDishRating.bind(this)}
            floatingLabelText="Enter Your Rating of Dish"
          /><br/>
          <Checkbox
            onClick={this.handleVegClick.bind(this)}
            label="Vegetarian"
            style={styles.checkbox}
          />
          <Checkbox
            label="Gluten-free"
            onClick={this.handleGFClick.bind(this)}
            style={styles.checkbox}
          />
          <Checkbox
            label="Spicy"
            onClick={this.handleSpicyClick.bind(this)}
            style={styles.checkbox}
          /><br/>
          <RaisedButton onClick={this.handleSubmit.bind(this)} label="Submit" default={true} />
        </div> 

        <hr/>
      </div>
    );
  }
}
          /*<TextField
            onChange={this.handleDishDescription.bind(this)}
            floatingLabelText="Enter Description of Dish"
          /><br/>*/

        // <div style={styles.dropzone}>
        //   <Dropzone multiple={false} accept={'image/*'} onDrop={this.onDrop.bind(this)}>
        //     <div style={styles.text}>Drag your photo here, or click to select a file to upload.</div>
        //   </Dropzone>

        //   {this.props.photo ? <div><br/>Image Preview: <br/><img width='250' src={this.props.photo} /></div> : null}        
        // </div>