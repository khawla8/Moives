//create a diffrent directory to write down the code for navigation bar called 'navigation'
//should install react-bootstrap in react app
//call the file navigation from app.js
//this code will provode simple reactive navigation bar


//navigation.js code should look like
import React, { Component } from "react";
import './meun.css';
class Meun extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  <ul class="topnav">
  <li><a href="#home"><h2>Home</h2></a></li>
  <li><a href="#news"><h2>News</h2></a></li>
  <li><a href="#contact"><h2>Contact</h2></a></li>
  <li><a href="#about"><h2>About</h2></a></li>
  <li><a href="#search" class="material-icons"><h2>search</h2></a></li>
</ul>
</div>
    );
  }
}
export default Meun;
