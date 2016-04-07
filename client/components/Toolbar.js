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

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valueCategory: 'all',
    };
  }

  handleChange = (event, index, value) => this.setState({valueCategory: value});

  render () {

    const styles = {
      toolbar: {
        // background: "#ff4081",
        color: "black"
      },
      checkbox: {
        maxWidth: 175,
        marginTop: 16,
      },
      button: {
        margin: 12,
      }
    };

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarTitle text="YumSnap!" />
        <ToolbarGroup firstChild={true} float="left">
          <DropDownMenu value={this.state.valueCategory} onChange={this.handleChange}>
             <MenuItem value={'all'} primaryText="All"/>
             <MenuItem value={'asian'} primaryText="Asian"/>
             <MenuItem value={'american'} primaryText="American"/>
             <MenuItem value={'italian'} primaryText="Italian"/>
             <MenuItem value={'french'} primaryText="French"/>
           </DropDownMenu>
        <ToolbarSeparator />
          <Checkbox
            label="Gluten-free"
            style={styles.checkbox}
          />
          <Checkbox
            label="Vegetarian"
            style={styles.checkbox}
          />
          <Checkbox
            label="Not-Spicy"
            // defaultChecked={true}
            style={styles.checkbox}
          />
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            label="Favorites"
            style={styles.checkbox}
          />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <RaisedButton label="ADD" default={true} style={styles.button} />
          <RaisedButton label="Login" default={true} style={styles.button} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

/// HUGH'S ORIGINAL TOOLBAR
// export default class Toolbar extends React.Component {
//   handleChange(e) {
//     console.log('key pressed');
//     const testVal = e.target.value;
//     this.props.changeVariable(testVal);
//   }
//   handleVeg(e) {
//     console.log('veg clicked');
//     this.props.vegToggle();
//   }
//   handleCategory(e) {
//     console.log('category changed');
//     const category = e.target.value;
//     this.props.categorySelect(category);
//   }
//   render() {
//     // console.log("Toolbar props:", this.props);
//     return (
//       <div>
//         <h2>Toolbar Component</h2>
//         <select onChange={this.handleCategory.bind(this)}>
//           <option value="all">All</option>
//           <option value="asian">Asian</option>
//           <option value="american">American</option>
//           <option value="italian">Italian</option>
//           <option value="french">French</option>
//         </select>
//           <label>
//             <input
//               type="checkbox"
//               value="veg"
//               onChange={this.handleVeg.bind(this)}
//             />Vegetarian</label><br/>
//         <input onChange={this.handleChange.bind(this)} />
//         {/* Pass authToggle & auth to AuthPanel Component through props */}
//         <AuthPanel authToggle={this.props.authToggle} auth={this.props.auth}/>
//       </div>
//     );
//   }
// }
