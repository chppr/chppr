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
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/200/200/nature/"
        />
        <CardMedia>
          <img src="http://lorempixel.com/600/337/food/" />
        </CardMedia>
        <CardTitle title="Some super great dish" subtitle="omg so good" />
        <CardText>
          This was the best dish ever. Chef So and So is a genius. Oh my gosh wow I literally can't even.
        </CardText>
        <CardText>
          $8.99
        </CardText>
        <CardActions>
          <RaisedButton label="Spicy" />
          <RaisedButton label="Gluten-Free" />
          <RaisedButton label="Vegitarian" />
        </CardActions>
      </Card>
    );
  }
}