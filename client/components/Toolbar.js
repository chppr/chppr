import React from "react";
import AppBar from 'material-ui/lib/app-bar';
import AuthPanel from "./AuthPanel"

export default class Toolbar extends React.Component {
  handleChange(e) {
    console.log('key pressed');
    const testVal = e.target.value;
    this.props.changeVariable(testVal);
  }
  handleVeg(e) {
    console.log('veg clicked');
    this.props.vegToggle();
  }
  handleCategory(e) {
    console.log('category changed');
    const category = e.target.value;
    this.props.categorySelect(category);
  }
  render() {
    // console.log("Toolbar props:", this.props);
    return (
      <div>
        <h2>Toolbar Component</h2>
        <select onChange={this.handleCategory.bind(this)}>
          <option value="all">All</option>
          <option value="asian">Asian</option>
          <option value="american">American</option>
          <option value="italian">Italian</option>
          <option value="french">French</option>
        </select>
          <label>
            <input
              type="checkbox"
              value="veg"
              onChange={this.handleVeg.bind(this)}
            />Vegetarian</label><br/>
        <input onChange={this.handleChange.bind(this)} />
        {/* Pass authToggle & auth to AuthPanel Component through props */}
        <AuthPanel authToggle={this.props.authToggle} auth={this.props.auth}/>
      </div>
    );
  }
}

// import React from 'react';
// import AppBar from 'material-ui/lib/app-bar';

// const AppBarExampleIcon = () => (
//   <AppBar
//     title="Title"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//   />
// );

// export default AppBarExampleIcon;