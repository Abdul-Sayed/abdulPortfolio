AOS.init();


const menuToggler = document.querySelector('.menu-toggler');
const topNav = document.querySelector('.top-nav');
const navLink = document.querySelectorAll('.top-nav .nav-link');

menuToggler.addEventListener('click', () => {
  menuToggler.classList.toggle('open');
  topNav.classList.toggle('open');
})

navLink.forEach(link => {
  link.addEventListener('click', () => {
    menuToggler.classList.toggle('open', false);
    topNav.classList.toggle('open', false);
  })
})

AOS.init({
  easing: 'ease',
  once: true,
  duration: 1800
});

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// 





