// all buttons
const keys = document.querySelector('.keypad-container')
// screen value
const display = document.querySelector('.result-screen')
const rememberKey = document.querySelector('.screen-container')

// Understanding our calculate function (https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/)

const calculate = (n1, operator, n2) => {
  const firstNum = Number(n1)
  const secondNum = Number(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'substract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}

const calculator = (e) => {
  const key = e.target
  const action = key.dataset.action
  const keyContent = key.textContent
  const displayNum = display.value
  const prevKey = rememberKey.dataset.previousKeyType

  let firstValue
  let operator
  let secondValue

  if (key.matches('button')) {
    Array.from(key.parentNode.children)
      .forEach(element => element.classList.remove('active'))

    // get number
    if (!action) {
      // console.log('number')
      displayNum === '0' ||
        prevKey === 'operator' ||
        prevKey === 'equal'
        ? display.value = keyContent
        : display.value = displayNum + keyContent

      rememberKey.dataset.previousKeyType = 'number'
    }

    // decimal key
    if (action === 'decimal') {
      // console.log('decimal')
      if (
        prevKey === 'operator' ||
        prevKey === 'equal'
      ) {
        display.value = '0.'
      } else if (!displayNum.includes('.')) {
        display.value = displayNum + '.'
      }
      rememberKey.dataset.previousKeyType = 'decimal'
    }

    // operators
    if (
      action === 'add' ||
      action === 'substract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      // console.log('operator')
      firstValue = rememberKey.dataset.firstValue
      operator = rememberKey.dataset.operator
      secondValue = displayNum

      if (
        firstValue &&
        operator &&
        prevKey !== 'operator' &&
        prevKey !== 'equal'
      ) {
        const calcValue = calculate(firstValue, operator, secondValue)
        display.value = calcValue
        rememberKey.dataset.firstValue = calcValue
      } else {
        rememberKey.dataset.firstValue = displayNum
      }

      key.classList.add('active')
      // add custom attribute
      rememberKey.dataset.previousKeyType = 'operator'
      rememberKey.dataset.firstValue = displayNum
      rememberKey.dataset.operator = action
    }

    // del key
    if (action === 'del') {
      console.log('del key')
      rememberKey.dataset.previousKeyType = 'del'
    }

    // equal/calculate key
    if (action === 'equal') {
      // console.log('equal')
      firstValue = rememberKey.dataset.firstValue
      const operator = rememberKey.dataset.operator
      secondValue = displayNum
      if (firstValue) {
        if (prevKey === 'equal') {
          firstValue = displayNum
          secondValue = rememberKey.dataset.modValue
        }
        display.value = calculate(firstValue, operator, secondValue)
      }
      rememberKey.dataset.modValue = secondValue
      rememberKey.dataset.previousKeyType = 'equal'
      // rememberKey.dataset.finalValue = display.value
    }

    // reset key
    if (action === 'reset') {
      // console.log('reset key')
      display.value = '0'
      rememberKey.dataset.firstValue = ''
      rememberKey.dataset.operator = ''
      rememberKey.dataset.modValue = ''
      rememberKey.dataset.previousKeyType = 'reset'
    }
  }
}

// event listeners
keys.addEventListener('click', calculator)
