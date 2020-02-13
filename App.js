import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Toolbar from './components/toolbar.js';

const App = () => (
  <h1>
    Hi, I'm Kohta.
  </h1>
);




const intro = <p className="main">Just a beginner Front End Hub. I swear that I work better than do intros...</p>;

ReactDOM.render(
  intro, document.getElementById("test")
);

const navbar =
  <div class="nav-wrapper">
    <nav>
      <div class="navigation">
        <ul class="nav-items">
          <li><a href="#" target="_blank">Home</a></li>
          <li><a href="#" target="_blank">Portfolio</a></li>
          <li><a href="#" target="_blank">About</a></li>
          <li><a href="#" target="_blank">Contact</a></li>
        </ul>
        <div class="nav-toogler"></div>
      </div>
    </nav>
  </div>
ReactDOM.render(
  navbar, document.getElementById("navbar")
);

let navWrapper = document.querySelector('.nav-wrapper'),
  navToogler = document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
  navWrapper.classList.toggle('active')
})

window.onload = function () {
  document.getElementById("loading").style.display = "none";
}

const skills =
  <div className="PL">
    <p className="skills"> These are the programming languages that I know:</p>
    <div className="icontainer ">
      <img src="https://img.icons8.com/dusk/100/000000/html-5.png" className="icons"></img>
      <img src="https://img.icons8.com/dusk/100/000000/css3.png" className="icons"></img>
      <img src="https://img.icons8.com/color/100/000000/javascript.png" className="icons"></img>
      <img src="https://img.icons8.com/officel/100/000000/mysql.png" className="icons"></img>
    </div>
  </div>;

ReactDOM.render(
  skills, document.getElementById("something")
);




const learning =
  <div className="LK">
    <p className="skills">These are some of the libraries i'm most familiar with:</p>
    <div className="icontainer">
      <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png"></img>
      <img src="https://img.icons8.com/dotty/100/000000/react.png"></img>
    </div>
  </div>;

ReactDOM.render(
  learning, document.getElementById('libraries')
);


export default App;