//Show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
/* Menu show */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}
/* Menu hidden */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

// mobile menu
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(menuLink => menuLink.addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}))

// blur header
const blurHeader = () =>{
  const header = document.getElementById('header')
  // Add the blur-header class to the header if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
  }
  this.addEventListener('scroll', blurHeader)
