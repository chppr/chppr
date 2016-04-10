import React from "react";
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';

export default class DishCard extends React.Component {

  render() {

    const cardStyle = {
      padding: "20px"
    };

    const buttonStyle = {
      backgroundColor: "#E9573F"
    }    

    return (
      <Card
        className="col-md-6 col-lg-4"
        style={cardStyle}>
        <CardHeader
          title={"User Number "+ this.props.data.user_id}
          subtitle={"Category Number "+ this.props.data.category_id}
          avatar="http://lorempixel.com/200/200/nature/"
        />
        <CardMedia>
          <img src="http://lorempixel.com/600/337/food/" />
          <p> pretend img src is: {this.props.data.picture} </p>
        </CardMedia>
        <CardTitle
          title={this.props.data.food_item_name}
          subtitle={this.props.data.restaurant_name}
        />
        <CardText>
          {this.props.data.food_desc}
        </CardText>
        <row>
          ${this.props.data.cost / 100}
          {this.props.data.spicy ? " [🌶]" : ""}
          {this.props.data.gluten_free ? " [🚫🍞]" : ""}
          {this.props.data.vegetarian ? " [🌽]" : ""}
        </row>
      </Card>
    );
  }
}
