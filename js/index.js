"use strict";


window.onload = function() {
    let navToggle = document.getElementById('nav-toggle');
    let navBar = document.getElementById('navbar');
    console.log(navBar);
  
    function nav (e) {
      
      console.log(e);
      navToggle.classList.toggle("nav-toggle_open");
      navBar.classList.toggle("navbar_close");
      
      
      
    }
  
    navToggle.addEventListener('click', nav, false);
  
  };

