import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';
import Dropzone from "react-dropzone";
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import StarRatingComponent from 'react-star-rating-component';
import ReactSlider from './react-slider';
import {addCardStyles as styles} from '../inlineStyles';

  var slider = React.createFactory(ReactSlider);
  var globalValue = 5;
  function map(v, f, context) {
    return (v && v.map) ? v.map(f, context) : f.call(context, v, 0);
  }

  var Slider = React.createFactory(React.createClass({

    getInitialState: function () {
      return {value: this.props.defaultValue}
    },
    onChange: function (value) {
      this.setState({value: value});
      globalValue = value;
      console.log(value)
    },
    render: function () {
      return slider(
        Object.assign({
          className: this.props.orientation + '-slider',
          pearling: true,
          minDistance: 10,
          value: this.state.value,
          onChange: this.onChange
        }, this.props),
          map(this.state.value, function (value, i) {
            return React.createElement('div', {key: i}, "$"+value);
          })
        );
      }
    }));

export default class AddCard extends React.Component {

  onDrop (files) {
    this.props.photoInput(files);
  }
  handleDishName(e) {
    this.props.dishNameInput(e.target.value);
  }
  handleRestaurantName(e) {
    this.props.restaurantNameInput(e.target.value);
  }
  handleDishDescription(e) {
    this.props.dishDescriptionInput(e.target.value);
  }
  handleDishRating(e) {
    console.log("rating arguments", e);
    this.props.dishRatingInput(e);
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
    console.log(globalValue);
    this.props.dishPriceInput(globalValue);
    this.props.addCardSubmit();
  }
  handlePhoto(e) {
    this.props.photoAdd(e.target.value);
  }
  handleCatSelect(event, index, value) {
    console.log(value);
    this.props.catAdd(value);
  }

  render() {
    return (
      <div style={styles.block}>
        {!this.props.photo ? 
        <TextField
          onChange={this.handlePhoto.bind(this)}
          floatingLabelText="Enter URL for your photo"
        /> : null}

        <div style={styles.dropzone}>
          {!this.props.photo ? 
          <Dropzone multiple={false} accept={'image/*'} onDrop={this.onDrop.bind(this)}>
            <div style={styles.text}>Drag your photo here, or click to select a file to upload. 
              <br/><br/>Note: This overwrites the URL option.</div>
          </Dropzone> : null}

          {this.props.photo ? <div><br/>Image Preview: <br/><img width='250' src={this.props.photo} /></div> : null}
        </div>
        <TextField
          onChange={this.handleDishName.bind(this)}
          floatingLabelText="Enter Name of Dish"
        /><br/>
        <TextField
          onChange={this.handleRestaurantName.bind(this)}
          floatingLabelText="Enter Name of Restaurant"
        /><br/>
        <h4>Rate the Dish</h4>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          starColor="red"
          value={0}
          onStarClick={this.handleDishRating.bind(this)}
        /><br/><br/>

          <h4>Price of Dish</h4>
          <Slider defaultValue={0} orientation='horizontal' max={30} withBars={true}/>
          <br/>

          <TextField
          onChange={this.handleDishDescription.bind(this)}
          fullWidth={true}
          floatingLabelText="Comments"
          multiLine={true}
          rows={2}
          rowsMax={20}
          underlineStyle={{margin:5}}
         /><br/>
        <DropDownMenu style={styles.dropdown} value={this.props.dishCat} onChange={this.handleCatSelect.bind(this)}>
          <MenuItem value={999} primaryText="Category"/>
          <MenuItem value={null} primaryText="All"/>
          <MenuItem value={1} primaryText="Mexican"/>
          <MenuItem value={2} primaryText="American"/>
          <MenuItem value={3} primaryText="Asian"/>
          <MenuItem value={4} primaryText="Italian"/>
          <MenuItem value={5} primaryText="Brunch"/>
          <MenuItem value={6} primaryText="Greek"/>
          <MenuItem value={7} primaryText="German"/>
          <MenuItem value={8} primaryText="Brazilian"/>
          <MenuItem value={9} primaryText="BBQ"/>
          <MenuItem value={10} primaryText="Cuban"/>
          <MenuItem value={11} primaryText="Cajun"/>
          <MenuItem value={12} primaryText="Southern"/>
          <MenuItem value={13} primaryText="Non-Alcoholic"/>
          <MenuItem value={14} primaryText="Alcoholic"/>
          <MenuItem value={15} primaryText="Desserts"/>
        </DropDownMenu><br/><br/>
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
          /><br/><br/>

          <RaisedButton style={{"margin-bottom": "10px"}} onClick={this.handleSubmit.bind(this)} label="Submit" default={true} />
        <hr/>
        </div>
    );
  }
} 
        // <RaisedButton style={styles.button} onClick={this.handleSubmit.bind(this)} label="Submit" default={true} />
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
