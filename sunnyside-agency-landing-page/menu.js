const menuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#mobile-menu')

const toggleBtn = () => {
  menuBtn.classList.toggle('open')
  showMenu()
}

const showMenu = () => {
  if (mobileMenu.classList.contains('close')) {
    mobileMenu.classList.remove('close')
    mobileMenu.classList.add('show')
  } else {
    mobileMenu.classList.add('close')
    mobileMenu.classList.remove('show')
  }
}

menuBtn.addEventListener('click', toggleBtn)
