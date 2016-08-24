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
import Avatar from 'material-ui/lib/avatar';
import {styles} from '../inlineStyles';

export default class Navbar extends React.Component {

  handleCategory(event, index, value) {
    this.props.categorySelect(value);
  }

  // YES, this setTimeout looks janky but it was the only way I found that displays the checked boxes after selecting them
  handleToggle(e) {
    const toggleFilter = e.target.value;
    window.setTimeout(function(){
        this.props.stateToggle(toggleFilter);
      }
      .bind(this), 0);
  }

  redirect(address){
    window.location.href = address;
  }

  handleShowAdd() {
    this.props.stateToggle('showAdd');
  }

  render(){
    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarTitle style={styles.title} className="nav-title" text="Yumster" />
        <ToolbarGroup firstChild={true} float="left">
          <DropDownMenu style={styles.dropdown} value={this.props.category} onChange={this.handleCategory.bind(this)}>
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
          </DropDownMenu>



          <Checkbox
            value="veg"
            onClick={this.handleToggle.bind(this)}
            label="Vegetarian"
            style={styles.checkbox}
          />
          <Checkbox
            value="gf"
            label="Gluten-free"
            onClick={this.handleToggle.bind(this)}
            style={styles.checkbox}
          />
          <Checkbox
            value="noSpice"
            label="Not-Spicy"
            onClick={this.handleToggle.bind(this)}
            style={styles.checkbox}
          />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          {
            getCookieValue("profilePic")
            ? <Avatar style={{margin: 10}} src={decodeURIComponent(getCookieValue("profilePic"))} />
            : null
          }{
            document.cookie.split("; ").indexOf("loggedIn=false")!==-1
             ? <RaisedButton onClick={this.redirect.bind(this, "http://localhost:4000/")} label="LOGIN" default={true} style={styles.button} /> 
             : <div>
                 <RaisedButton onClick={this.redirect.bind(this, "http://localhost:4000/auth/logout")} label="LOGOUT" default={true} style={styles.button} />
                 <RaisedButton onClick={this.handleShowAdd.bind(this)} label={!this.props.showAdd ? "ADD DISH" : "CANCEL"} default={true} style={styles.button} />
               </div>
          }
        </ToolbarGroup>
      </Toolbar>
    )
  }
}


function getCookieValue(a, b) {
    b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
/*
  In case we want to filter by favorites later:

  <Checkbox
    value="showFavs"
    onClick={this.handleToggle.bind(this)}
    checkedIcon={<ActionFavorite/>}
    uncheckedIcon={<ActionFavoriteBorder/>}
    label="Favorites"
    style={styles.checkbox}
  />
*/
