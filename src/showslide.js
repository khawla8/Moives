/*
import './showslide.css';
import freeGuy from './image/free guy.jpg';
import soundGame from './image/sound-game.jpg';
import whatIf from './image/whatif.jpg';
import goodDoctor from './image/good-doctor.jpg';
import jurassicHunt from './image/Jurassic-Hunt.jpg';
import luca from './image/Luca.jpg';
  
<script>
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
</script>
function Showslide() {
    return ( 
<div>

<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta content="text/html; charset=iso-8859-2" http-equiv="Content-Type"/>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
     <div class="w3-content w3-section" style="max-width:500px">
  <img class="mySlides" src={freeGuy} />
  <img class="mySlides" src={soundGame} />
  <img class="mySlides" src={whatIf} />
  <img class="mySlides" src={goodDoctor} />
  <img class="mySlides" src={jurassicHunt} />
  <img class="mySlides" src={luca} />
</div>   
</div>
     );
}
export default Showslide;
*/