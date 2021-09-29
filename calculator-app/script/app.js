// all buttons
const keys = document.querySelector('.keypad-container')
// screen value
const h1 = document.querySelector('.result-screen')
const rememberBtn = document.querySelector('.screen-container')

let firstNum
let operator
let secondNum

const calculate = (n1, operator, n2) => {
  const num1 = Number(n1)
  const num2 = Number(n2)
  if (operator === 'add') return num1 + num2
  if (operator === 'substract') return num1 - num2
  if (operator === 'multiply') return num1 * num2
  if (operator === 'divide') return num1 / num2
}

const sendNum = (displayNum, prevBtn, buttonContext) => {
  displayNum === '0' ||
  prevBtn === 'operator' ||
  prevBtn === 'equal'
    ? h1.textContent = buttonContext
    : h1.textContent = displayNum + buttonContext
  rememberBtn.dataset.prevBtn = 'number'
}

const decimal = (displayNum, prevBtn) => {
  if (prevBtn === 'operator') {
    h1.textContent = '0.'
  } else if (!displayNum.includes('.')) {
    h1.textContent = displayNum + '.'
  }
  rememberBtn.dataset.prevBtn = 'decimal'
}

const del = (prevBtn, displayNum) => {
  if (prevBtn === 'number' || prevBtn === 'del') {
    h1.textContent = displayNum.slice(0, -1)

    if (
      (prevBtn === 'decimal' || prevBtn === 'del') && displayNum.length === 1
    ) {
      h1.textContent = '0'
    }

    if (h1.textContent.length < 1) h1.textContent = '0'

    rememberBtn.dataset.firstNum = h1.textContent || 0
  }

  rememberBtn.dataset.prevBtn = 'del'
}

const reset = () => {
  h1.textContent = '0'
  rememberBtn.dataset.firstNum = ''
  rememberBtn.dataset.operator = ''
  rememberBtn.dataset.modValue = ''
}

const calculator = (e) => {
  const button = e.target
  const type = button.dataset.type
  const buttonContext = button.textContent
  const displayNum = h1.textContent
  const prevBtn = rememberBtn.dataset.prevBtn

  if (button.matches('button')) {
    Array.from(button.parentNode.children)
      .forEach(element => element.classList.remove('active'))

    if (!type) {
      sendNum(displayNum, prevBtn, buttonContext)
    }

    if (type === 'decimal') {
      decimal(displayNum, prevBtn)
    }

    if (button.classList.contains('operator')) {
      firstNum = rememberBtn.dataset.firstNum
      operator = rememberBtn.dataset.operator
      secondNum = displayNum

      if (
        firstNum &&
        operator &&
        prevBtn !== 'operator' &&
        prevBtn !== 'equal'
      ) {
        const calcValue = calculate(firstNum, operator, secondNum)
        h1.textContent = calcValue
        rememberBtn.dataset.firstNum = calcValue
      } else {
        rememberBtn.dataset.firstNum = firstNum
      }

      button.classList.add('active')
      rememberBtn.dataset.prevBtn = 'operator'
      rememberBtn.dataset.firstNum = displayNum
      rememberBtn.dataset.operator = type
    }

    if (type === 'del') {
      del(prevBtn, displayNum)
    }

    if (type === 'equal') {
      firstNum = rememberBtn.dataset.firstNum
      operator = rememberBtn.dataset.operator
      secondNum = displayNum

      if (firstNum) {
        if (prevBtn === 'equal') {
          firstNum = displayNum
          secondNum = rememberBtn.dataset.modValue
        }
        h1.textContent = calculate(firstNum, operator, secondNum)
      }

      rememberBtn.dataset.modValue = secondNum
      rememberBtn.dataset.prevBtn = 'equal'
    }

    if (type === 'reset') {
      reset()
    }
  }
}

// event listeners
keys.addEventListener('click', calculator)
