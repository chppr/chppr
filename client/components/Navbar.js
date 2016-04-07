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
  handleVeg(a,b,c) {
    console.log('veg clicked');
    console.log('a:',a,'b:',b,'c:',c);
    this.props.vegToggle();
  }
  handleGf() {
    console.log('gf clicked');
    this.props.gfToggle();
  }
  handleNoSpice() {
    console.log('noSpice clicked');
    this.props.noSpiceToggle();
  }
  handleShowAdd() {
    console.log('AddCard pressed');
    this.props.showAddToggle();
  }
  handleShowFavs() {
    console.log('showFavs pressed');
    this.props.showFavsToggle();
  }

  render () {

    const styles = {
      title: {
        // background: "#ff4081",
        fontWeight: 700, 
        fontSize: "25px",
        // marginRight: "25px",
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
        <ToolbarSeparator />
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
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
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
