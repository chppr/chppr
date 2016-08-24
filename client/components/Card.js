import React from "react";
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import Avatar from 'material-ui/lib/avatar';
import {cardStyle, priceStyle, imageStyle, cardMediaStyle, cardWrapperStyle, buttonStyle} from '../inlineStyles';

export default class DishCard extends React.Component {
  render() {
    return (
      <div className="cardWrapper col-sm-6 col-lg-4" style={cardWrapperStyle}>
        <Card
          className=""
          style={cardStyle}>
          <CardMedia 
            style={cardMediaStyle} 
            overlayStyle={{color:"white", bottom:10, fontSize:16}} 
            overlay={
              <CardTitle            
                expandable={true}
                initiallyExpanded={false}
                title={this.props.data.dish_name} 
                subtitle={this.props.data.rest_name} 
              />
            }
          >
            <img style={imageStyle} src={this.props.data.picture_path} />
          </CardMedia>
          <row>
            <Avatar style={{margin:10}} src={this.props.data.profilepic}/>
              {Array.apply(null, new Array(this.props.data.rating)).map(function(cur, index){
                return <img key={index} style={{height:30, width:30}} src="/icons/star.png"/>
              })}
            <CardText>
            <em> {this.props.data.name} says:</em><br/>
             "{this.props.data.dish_description}"
            </CardText>
            <strong style={priceStyle}>
              ${this.props.data.price}
            </strong>
          </row>
        </Card>
      </div>
    );
  }
}
