import React from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import AuthPanel from "./AuthPanel";
import AddCard from "./AddCard";

export default class Navbar extends React.Component {

  // ToDo: Refactor all Handle functions to generic handle w/ parameter
  handleCategory(event, index, value) {
    console.log('category changed to', value);
    this.props.categorySelect(value);
  }
  // handleVeg() {
  //   window.setTimeout(
  //     function(){
  //     console.log('veg clicked');
  //     this.props.vegToggle()}.bind(this),
  //     0
  //   );
  // }

  handleVeg() {
    window.setTimeout(
      function(){
      // console.log('THIS:',this);
      this.props.stateToggle('veg')}.bind(this),
      0
    );
  }

  handleGf() {
    window.setTimeout(
      function(){
      console.log('gf clicked');
      this.props.stateToggle('gf')}.bind(this),
      0
    );
  }
  handleNoSpice() {
    window.setTimeout(
      function(){
      console.log('noSpice clicked');
      this.props.stateToggle('noSpice')}.bind(this),
      0
    );
  }
  handleShowFavs() {
    window.setTimeout(
      function(){
      console.log('showFavs clicked');
      this.props.stateToggle('showFavs')}.bind(this),
      0
    );
  }  
  handleShowAdd() {
    console.log('AddCard pressed');
    this.props.stateToggle('showAdd');
  }

  render () {

    const styles = {
      title: {
        color: "red",
        minWidth: 160,
        maxWidth: 160,
        fontWeight: 700, 
        fontSize: "30px",
        marginRight: 0,
        // background: "blue",
      },
      dropdown: {
        marginRight: 100,
        width: 30,
        // background: "blue",
      },
      toolbar: {
        // background: "#ff4081",
        color: "black",
      },
      // dropdown: {
      //   background: "#ff4081",
      // },
      checkbox: {
        maxWidth: 150,
        marginTop: 16,
        paddingLeft: 10,
      },
      button: {
        margin: 12,
      }
    };

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarTitle style={styles.title} text="YumSnap!" />
        <ToolbarGroup firstChild={true} float="left">
          <DropDownMenu style={styles.dropdown} value={this.props.category} onChange={this.handleCategory.bind(this)}>
              <MenuItem value={'all'} primaryText="All"/>
              <MenuItem value={'asian'} primaryText="Asian"/>
              <MenuItem value={'american'} primaryText="American"/>
              <MenuItem value={'italian'} primaryText="Italian"/>
              <MenuItem value={'french'} primaryText="French"/>
          </DropDownMenu>
          <Checkbox
            value="veg"
            onClick={this.handleVeg.bind(this)}
            label="Vegetarian"
            style={styles.checkbox}
          />
          <Checkbox
            label="Gluten-free"
            onClick={this.handleGf.bind(this)}
            style={styles.checkbox}
          />
          <Checkbox
            label="Not-Spicy"
            // defaultChecked={true}
            onClick={this.handleNoSpice.bind(this)}
            style={styles.checkbox}
          />
          <Checkbox
            onClick={this.handleShowFavs.bind(this)}
            checkedIcon={<ActionFavorite/>}
            uncheckedIcon={<ActionFavoriteBorder/>}
            label="Favorites"
            style={styles.checkbox}
          />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <RaisedButton onClick={this.handleShowAdd.bind(this)} label="ADD" default={true} style={styles.button} />  
          <AuthPanel authToggle={this.props.authToggle} auth={this.props.auth}/>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}