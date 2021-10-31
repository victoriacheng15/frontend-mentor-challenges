import { createFaqCard } from './questions.js'

const questionSections = document.querySelectorAll('.question-section')

questionSections.forEach(questionSection => {
  const arrowDownBtn = questionSection.querySelector('.arrow-down')
  const showAnswer = questionSection.querySelector('.answer-text')

  arrowDownBtn.addEventListener('click', () => {
    showAnswer.classList.toggle('active')
    console.log('you clicked')
  })
})
