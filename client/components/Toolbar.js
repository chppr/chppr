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
      valueOptions: 'gluten-free'
    };
  }

  handleChange = (event, index, value) => this.setState({valueCategory: value});

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueOptions: value,
    });
  };

  render () {

    const styles = {
      block: {
        // background: "white",
        // maxWidth: 175,
        padding: 15,
      },
      checkbox: {
        // marginBottom: 16,
        // clear: 'none'
      },
      button: {
        margin: 12,
      }
    };

    return (
      <Toolbar>
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
          <DropDownMenu value={this.state.valueOptions} onChange={this.handleChangeMultiple} multiple={true}>
            <MenuItem value={'gluten-free'} primaryText="Gluten-Free"/>
            <MenuItem value={'vegetarian'} primaryText="Vegetarian"/>
            <MenuItem value={'not-spicy'} primaryText="Not-Spicy"/>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <RaisedButton label="ADD" default={true} style={styles.button} />
          <RaisedButton label="Login" default={true} style={styles.button} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}



////// THE "APPBAR" ////////
//
// import React from "react";
// import AppBar from 'material-ui/lib/app-bar';
// import DropDownMenu from 'material-ui/lib/DropDownMenu';                              // Patrick D added this
// import MenuItem from 'material-ui/lib/menus/menu-item';                               // Patrick D added this
// import Checkbox from 'material-ui/lib/checkbox';                                      // Patrick D added this
// import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';               // Patrick D added this
// import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';  // Patrick D added this
// import RaisedButton from 'material-ui/lib/raised-button';                             // Patrick D added this
// import AuthPanel from "./AuthPanel";

// export default class ToolBar extends React.Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {value: 'all'};
//   }

//   handleChange = (event, index, value) => this.setState({value});

//   render () {

//     const styles = {
//       block: {
//         background: "white",
//         maxWidth: 175,
//         padding: 15,
//       },
//       checkbox: {
//         // marginBottom: 16,
//         // clear: 'none'
//       },
//       button: {
//         margin: 12,
//       }
//     };

//     return (
//       <AppBar
//         title="YumSnap!"
//         iconElementLeft= {
//           <div>
//             <DropDownMenu value={this.state.value} onChange={this.handleChange}>
//               <MenuItem value={'all'} primaryText="All"/>
//               <MenuItem value={'asian'} primaryText="Asian"/>
//               <MenuItem value={'american'} primaryText="American"/>
//               <MenuItem value={'italian'} primaryText="Italian"/>
//               <MenuItem value={'french'} primaryText="French"/>
//             </DropDownMenu>

//           </div>
//         }
//         iconElementRight={
//           <div>
//             <RaisedButton label="ADD" default={true} style={styles.button} />
//             <RaisedButton label="Login" default={true} style={styles.button} />
//             <div style={styles.block}>            
//               <Checkbox
//                 label="Gluten-free"
//                 style={styles.checkbox}
//               />
//               <Checkbox
//                 label="Vegetarian"
//                 style={styles.checkbox}
//               />
//               <Checkbox
//                 label="Not-Spicy"
//                 // defaultChecked={true}
//                 style={styles.checkbox}
//               />
//               <Checkbox
//                 checkedIcon={<ActionFavorite />}
//                 uncheckedIcon={<ActionFavoriteBorder />}
//                 label="Favorites"
//                 style={styles.checkbox}
//               />
//             </div>
//           </div>
//         }
//       />
//     )
//   }
// }


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