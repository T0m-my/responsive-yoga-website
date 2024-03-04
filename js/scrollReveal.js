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