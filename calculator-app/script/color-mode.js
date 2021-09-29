const switchBtn = document.querySelector('.switch-btn')
const html = document.querySelector('html')
const body = document.querySelector('body')
const displayScreen = document.querySelector('.result-screen')
const keypad = document.querySelectorAll('button')
const equalBtn = document.querySelector('.equal')

const addOrRemoveClass = (element, action, nameClass) => {
  action === 'add'
    ? element.classList.add(nameClass)
    : element.classList.remove(nameClass)
}

const darkBlueMode = () => {
  // mode selection button
  addOrRemoveClass(switchBtn, 'remove', 'slide-2')
  addOrRemoveClass(switchBtn, 'remove', 'slide')

  html.setAttribute('color-mode', 'dark-blue')
  // remove light mode color
  addOrRemoveClass(body, 'remove', 'light-mode-color')
  addOrRemoveClass(displayScreen, 'remove', 'light-mode-color')

  // remove purple mode color
  keypad.forEach(btn => {
    addOrRemoveClass(btn, 'remove', 'purple-mode-key-color')
  })
  addOrRemoveClass(body, 'remove', 'purple-mode-body-color')
  addOrRemoveClass(equalBtn, 'remove', 'purple-mode-equal-color')
}

const purpleMode = () => {
  // mode selection button
  addOrRemoveClass(switchBtn, 'add', 'slide-2')
  addOrRemoveClass(switchBtn, 'remove', 'slide')

  html.setAttribute('color-mode', 'purple')
  // add purple mode color
  keypad.forEach(btn => {
    addOrRemoveClass(btn, 'add', 'purple-mode-key-color')
  })
  addOrRemoveClass(body, 'add', 'purple-mode-body-color')
  addOrRemoveClass(equalBtn, 'add', 'purple-mode-equal-color')

  // remove light mode color
  addOrRemoveClass(body, 'remove', 'light-mode-color')
  addOrRemoveClass(displayScreen, 'remove', 'light-mode-color')
}

const lightMode = () => {
  // mode selection button
  addOrRemoveClass(switchBtn, 'add', 'slide')

  html.setAttribute('color-mode', 'light')
  // add lgith mode-color
  addOrRemoveClass(body, 'add', 'light-mode-color')
  addOrRemoveClass(displayScreen, 'add', 'light-mode-color')

  // remove purple mode color
  keypad.forEach(btn => {
    addOrRemoveClass(btn, 'remove', 'purple-mode-key-color')
  })
  addOrRemoveClass(body, 'remove', 'purple-mode-body-color')
  addOrRemoveClass(equalBtn, 'remove', 'purple-mode-equal-color')
}

const toggleColorMode = () => {
  if (switchBtn.classList.contains('slide-2')) {
    darkBlueMode()
  } else if (switchBtn.classList.contains('slide')) {
    purpleMode()
  } else if (!switchBtn.classList.contains('slide')) {
    lightMode()
  }
}

switchBtn.addEventListener('click', toggleColorMode)
