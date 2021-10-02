import { Route } from "react-router-dom";
import React, { useEffect } from "react";
import './App.css';
import Meun from './meun';
import Mainpage from './mainpage';
//import Showslide from './showslide';

function App() {
    return ( 
        <div className = "App">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <br/><br/>
        <header className = "App-header">
        <h1>
        <i class="material-icons" style={{fontSize:"50px"}}>local_movies</i> Moives For You 
        </h1>
        </header>
        <br/><br/>
        <Meun/>
        <br/><br/><br/>
        <Mainpage/>
        </div>
    );
}

export default App;