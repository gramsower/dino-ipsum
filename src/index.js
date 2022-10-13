import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import [] from './js/[].js';

// Business Logic
 
function getPokemon(name) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
  const url = `https://pokeapi.co/api/v2/pokemon/{###}/`;

  request.addEventListener("loadend", function () {
    const pokeNames = JSON.parse(this.responseText);
    if (this.status === 200) {
      resolve(pokeNames);
    } else {
      reject([this, pokeNames]);
    }
  });
  request.open("GET", url, true);
  request.send();
  });
}

// U I Logic