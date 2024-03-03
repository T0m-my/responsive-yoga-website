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

  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 
    ? scrollUp.classList.add('show-scroll-up')
    : scrollUp.classList.remove('show-scroll-up')
  }
  this.addEventListener('scroll', scrollUp)
