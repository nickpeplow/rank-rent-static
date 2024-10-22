// Header Menu
const menuBtn = document.getElementById('menu-toggler');
const menu = document.getElementById('nav-menu');
const backdrop = document.getElementById('backdrop');
const menuLinks = document.querySelectorAll('.menu-link');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
  backdrop.classList.toggle('show');
});
backdrop.addEventListener('click', hideMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', hideMenu);
});

function hideMenu() {
  menu.classList.remove('show');
  backdrop.classList.remove('show');
}

// View All Services Cards
const viewAllBtn = document.getElementById('view-all-btn');
const servicesWrapper = document.getElementById('services-cards');

viewAllBtn.addEventListener('click', () => {
  servicesWrapper.classList.toggle('show');
  if (servicesWrapper.classList.contains('show')) {
    viewAllBtn.textContent = 'View Less';
  } else {
    viewAllBtn.textContent = 'View All';
  }
});

// Footer Year
const footerYear = document.getElementById('full-year');
footerYear.textContent = new Date().getFullYear();

// Testimonials Slider
$(document).ready(function () {
  $('#testimonials-slider').owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    dotsEach: true,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 6000,
    smartSpeed: 400,
    slideBy: 1,
    dotsClass: 'testimonials-slider__dots',
    navContainerClass: 'testimonials-slider__nav',
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
        nav: true,
      },
      1024: {
        items: 2,
        margin: 20,
      },
    },
  });
});
