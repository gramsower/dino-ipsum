import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import [] from './js/[].js';

// Business Logic
 
function getPokemon(inputtedNumber) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
  const url = `https://pokeapi.co/api/v2/pokemon/${inputtedNumber}/`;

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

function handleUserNumber(event) {
  event.preventDefault();
  const  inputtedNumber = parseInt(document.querySelector("input#get-pokemon").value);
  getPokemon(inputtedNumber);
}
console.log(handleUserNumber(5));

function printCall(pokeNames) {
  document.querySelector('#showResponse').innerText = `${pokeNames}`;
}
console.log(printCall());