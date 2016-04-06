import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import AuthPanel from "./AuthPanel"


export default class Toolbar extends React.Component {
  
  handleChange(e) {
  	console.log('key pressed');
  	const testVal = e.target.value;
    this.props.changeVariable(testVal);
  }
  render() {
	console.log("Toolbar props:", this.props);
    return (
      <div>
		<AuthPanel authToggle={this.props.authToggle}/>
        <select>
		  <option value="asian">Asian</option>
		  <option value="american">American</option>
		  <option value="italian">Italian</option>
		  <option value="french">French</option>
		</select>
		  <label><input type="checkbox" value="spicy"/>Spicy</label>
		  <label><input type="checkbox" value="vegetarian"/>Vegetarian</label>
		  <label><input type="checkbox" value="gluten_free"/>Gluten-Free</label>
		  <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

        // <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

// import React from 'react';
// import AppBar from 'material-ui/lib/app-bar';

// const AppBarExampleIcon = () => (
//   <AppBar
//     title="Title"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//   />
// );

// export default AppBarExampleIcon;