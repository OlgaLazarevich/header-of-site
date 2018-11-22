"use strict";


window.onload = function () {
  
  let navToggle = document.getElementById('nav-toggle');
  let navBar = document.getElementById('navbar');

  function nav(e) {
    
    navToggle.classList.toggle("nav-toggle_open");
    navBar.classList.toggle("navbar_close");
  }

  navToggle.addEventListener('click', nav, false);

};