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

// scroll up
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 
  ? scrollUp.classList.add('show-scroll-up')
  : scrollUp.classList.remove('show-scroll-up')
}
this.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
  
const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else {
      sectionsClass.classList.remove('active-link')
    }                                                    
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
{/* <i class="ri-sun-line"></i> */}
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

//scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // animations repeat
});

sr.reveal('.home__data, .list__container, .join__content, .footer__container');
sr.reavel('.home__img', {origin: 'bottom'});
sr.reavel('.health__image, .routine__images, .follow__img-3', {origin: 'left'});
sr.reavel('.health__data, .routine__data, .follow__img-4', {origin: 'right'});
sr.reavel('.follow__data, .follow__content-1 img', {interval: 100});
