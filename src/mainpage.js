import React, { Component } from 'react';
import './style.scss';
import freeGuy from './image/free guy.jpg';
import soundGame from './image/sound-game.jpg';
import whatIf from './image/whatif.jpg';
import goodDoctor from './image/good-doctor.jpg';
import jurassicHunt from './image/Jurassic-Hunt.jpg';
import luca from './image/Luca.jpg';

const the_card = document.getElementById('iam-the-card');

class Mainpage extends React.Component {
   
  render() {
     /* function Flip(event) {
      var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
    } */
    return (
      <div class="wrapper">
  <div class="card" onclick="Flip(event)">
    <figure class="card__thumbnail">
      <img src={freeGuy}/>
    </figure>
  </div>
 <div class="card" onclick="Flip(event)">
    <figure class="card__thumbnail">
      <img src={soundGame}/> 
    </figure>
  </div>
<div class="card" onclick="Flip(event)">
    <figure class="card__thumbnail">
      <img src={whatIf}/> 
    </figure>
  </div>
 <div class="card" onclick="Flip(event)">
    <figure class="card__thumbnail">
      <img src={goodDoctor}/>
    </figure>
  </div>
 <div class="card" onclick="Flip(event)">
    <figure class="card__thumbnail">
      <img src={jurassicHunt}/>
    </figure>
  </div>
 <div class="card" onclick="Flip(event)">
    <figure class="card__thumbnail">
      <img src={luca}/>
    </figure>
  </div>
</div>

    )
  }
}

export default Mainpage;