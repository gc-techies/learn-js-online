import _ from 'lodash';
import printMe from './print.js';
import './css/custom.css';
// Import all of Bootstrap’s CSS
import "bootstrap/dist/css/bootstrap.css";
import Passport from './imgs/tobi.png';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('bg-blue', 'fw-bold', 'p-3', 'text-center');

  // Add the image to our existing div.
  const myPassport = new Image();
  myPassport.src = Passport;

  element.appendChild(myPassport);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());