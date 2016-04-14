import React from "react";
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';

export default class DishCard extends React.Component {

  handleDeleteCard(stuff){
    // console.log('is anything here',stuff,'this',this)
    this.props.deleteCard(this.props.data);
  }

  displayDeleteButton(){
    if (!(this.props.currentUser == this.props.data.user_id) ){
      console.log('PJ',this.props.data.user_id)
      return {display:'none'}
    }
    else {
      return {
        position: "absolute",
        right: 10,
        bottom: 10
      }
    }

  }

  render() {

    const cardStyle = {
      padding: "30px",
      height: "700px",
      position: "relative",
    };

    const imageStyle = {
      width: "100%",
      maxHeight: "360px",
      width: "auto",
    };

    const cardMediaStyle = {
      height: "370px"
    };

    const cardWrapperStyle = {
      marginBottom: "30px",
      display: "block"
    };
    //not in use I pasted into function above
    const buttonStyle = {
      position: "absolute",
      right: 10,
      bottom: 10
    }

    const timeStamp = {
      position: "absolute",
      right: 8,
      top: 8,
      color: 'gray'
    }

    const iconStyle = {
      position: "absolute",
      left: 10,
      bottom: 17
    }

  

    return (
      <div className="cardWrapper col-sm-6 col-lg-4" style={cardWrapperStyle}>
        <Card
          className=""
          style={cardStyle}>
          <CardHeader
            title={"User Number "+ this.props.data.user_id}
            subtitle={"Category: "+ this.props.categories[this.props.data.category]}
            avatar="http://lorempixel.com/200/200/"
          />
          <CardMedia style={cardMediaStyle}>
              <img style={imageStyle} src={this.props.data.picture_path} />
          </CardMedia>
          <CardTitle
            title={this.props.data.dish_name}
            subtitle={this.props.data.rest_name}
          />
          <CardText>
            <strong style={{clear: "none", float: "right"}}>
              ${Number(this.props.data.price).toFixed(2)}
            </strong>
          <div>
                {'Rating: '+this.props.data.rating}
            <div style={iconStyle}>
              {this.props.data.spicy ? "🔥" : ""}
              {this.props.data.veggie ? "🌽" : ""}
              {this.props.data.gluten_free ? "🚫🍞" : ""}
            </div>
          </div>
          <div style={timeStamp}>
            {moment(this.props.data.timestamp).calendar()}
          </div>
          </CardText>
            <FlatButton onClick={this.handleDeleteCard.bind(this)}
                        label="Remove Dish"
                        style = {this.displayDeleteButton.bind(this).call()}
                        linkButton={true}
                        hoverColor= "#E9573F"
                        rippleColor="yellow"
            />
        </Card>
      </div>
    ); 
  }
}
