// inputs
const bill = document.querySelector('#bill-input')
const customTip = document.querySelector('.custom-input')
const numberOfPeople = document.querySelector('#people-input')
// all buttons
const btnContainer = document.querySelectorAll('#tip')
const resetBtn = document.querySelector('.reset-btn')
// tip amount and total
const tipAmountPerPerson = document.querySelector('#tip-amount')
const totalAmountPerPerson = document.querySelector('#total-amount')

let totalBill = 0
let totalPeople = 1
let tipSelected = 0

// functions
const billInput = (event) => {
  if (event.type === 'keyup') {
    totalBill = Number(bill.value)
  }
  updatePriceBoard()
}

const addNumPeople = (event) => {
  if (event.type === 'keyup') {
    totalPeople = Number(numberOfPeople.value) || totalPeople
  }
  updatePriceBoard()
}

const calcTipPerPerson = () => {
  return (totalBill / totalPeople) * tipSelected * 0.01
}

const calcTotalPerPerson = () => {
  return (totalBill / totalPeople) * (1 + tipSelected * 0.01)
}

const customTipInput = () => {
  tipSelected = Number(customTip.value)
  clearTipSelection()
  addCustomTipBorder()
  updatePriceBoard()
}

const moneyFormatter = (money) => {
  return Number(money).toFixed(2)
}

const updatePriceBoard = () => {
  if (calcTipPerPerson() === Infinity ||
      isNaN(calcTipPerPerson()) ||
      totalPeople === 0) {
    tipAmountPerPerson.textContent = '0.00'
    totalAmountPerPerson.textContent = '0.00'
  } else {
    tipAmountPerPerson.textContent = moneyFormatter(calcTipPerPerson())
    totalAmountPerPerson.textContent = moneyFormatter(calcTotalPerPerson())
  }
}

const clearTipSelection = () => {
  btnContainer.forEach(btn => {
    btn.classList.remove('active')
  })
}

const addCustomTipBorder = () => {
  const customBtn = document.querySelector('.custom-btn')
  customBtn.classList.add('custom-active')
}

const removeCustomTipBorder = () => {
  const customBtn = document.querySelector('.custom-btn')
  customBtn.classList.remove('custom-active')
  customTip.value = ''
}

const resetEverything = () => {
  clearTipSelection()
  removeCustomTipBorder()
  totalBill = 0
  totalPeople = 1
  tipSelected = 0
  bill.value = ''
  numberOfPeople.value = 1
  tipAmountPerPerson.textContent = '0.00'
  totalAmountPerPerson.textContent = '0.00'
}

// event listeners
bill.addEventListener('keyup', billInput)
numberOfPeople.addEventListener('keyup', addNumPeople)

btnContainer.forEach(btn => {
  btn.addEventListener('click', () => {
    clearTipSelection()
    removeCustomTipBorder()
    if (btn.className === 'tip-btn') {
      tipSelected = Number(btn.dataset.tip)
      btn.classList.add('active')
      updatePriceBoard()
    }
  })
})

customTip.addEventListener('keyup', customTipInput)
resetBtn.addEventListener('click', resetEverything)
