import { createFaqCard } from './questions.js'

const questionSections = document.querySelectorAll('.question-section')

questionSections.forEach(questionSection => {
  const arrowDownBtn = questionSection.querySelector('.arrow-down')
  const boldTitle = questionSection.querySelector('.question-title')
  const showAnswer = questionSection.querySelector('.answer-text')

  arrowDownBtn.addEventListener('click', () => {
    let answerHeight = showAnswer.scrollHeight

    if (showAnswer.classList.contains('open')) {
      showAnswer.style.height = `0px`
    } else {
      showAnswer.style.height = `${answerHeight}px`
    }

    showAnswer.classList.toggle('open')
    boldTitle.classList.toggle('bold-title')
    arrowDownBtn.classList.toggle('active')
  })
})
