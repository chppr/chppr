import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import DropDownMenu from 'material-ui/lib/DropDownMenu';                              // Patrick D added this
import MenuItem from 'material-ui/lib/menus/menu-item';                               // Patrick D added this
import Checkbox from 'material-ui/lib/checkbox';                                      // Patrick D added this
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';               // Patrick D added this
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';  // Patrick D added this
import AuthPanel from "./AuthPanel";

export default class Toolbar extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {value: 'all'};
  }

  handleChange = (event, index, value) => this.setState({value});

  render () {

    const styles = {
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
        // clear: 'none'
      }
    };

    return (
      <AppBar
        title="YumSnap!!!"
        iconElementLeft= {
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={'all'} primaryText="All"/>
            <MenuItem value={'asian'} primaryText="Asian"/>
            <MenuItem value={'american'} primaryText="American"/>
            <MenuItem value={'italian'} primaryText="Italian"/>
            <MenuItem value={'french'} primaryText="French"/>
          </DropDownMenu>
        }
        iconElementRight={
          <div style={styles.block}>            
            <Checkbox
              label="Gluten-free"
              style={styles.checkbox}
            />
            <Checkbox
              label="Vegetarian"
              style={styles.checkbox}
            />
            <Checkbox
              label="Not-spicy"
              // defaultChecked={true}
              style={styles.checkbox}
            />
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              label="Favorites"
              style={styles.checkbox}
            />
          </div>
        }
      />
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

// import React from 'react';
// import AppBar from 'material-ui/lib/app-bar';

// const AppBarExampleIcon = () => (
//   <AppBar
//     title="Title"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//   />
// );

// export default AppBarExampleIcon;