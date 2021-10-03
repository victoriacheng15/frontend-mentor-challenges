const body = document.querySelector('body')
const menuToggle = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')

const toggle = () => {
  menuToggle.classList.toggle('menu-active')
  mobileNav.classList.toggle('show-menu')
}

const removeMobileNav = () => {
  body.clientWidth > 800
    ? mobileNav.classList.remove('mobile-nav')
    : mobileNav.classList.add('mobile-nav')
}

window.addEventListener('load', removeMobileNav)
window.addEventListener('resize', removeMobileNav)
menuToggle.addEventListener('click', toggle)
