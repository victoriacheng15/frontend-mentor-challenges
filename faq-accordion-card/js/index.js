import { createFaqCard } from './questions.js'

const faqSections = document.querySelectorAll('.card-faq-section')

faqSections.forEach(faqSection => {
  const clickOnQuestions = faqSection.querySelector('.title-group')
  const arrowDown = faqSection.querySelector('.arrow-down')
  const boldTitle = faqSection.querySelector('.question-title')
  const showAnswer = faqSection.querySelector('.answer-text')

  clickOnQuestions.addEventListener('click', () => {
    let answerHeight = showAnswer.scrollHeight

    if (showAnswer.classList.contains('open')) {
      showAnswer.style.height = '0px'
    } else {
      showAnswer.style.height = `${answerHeight}px`
    }

    showAnswer.classList.toggle('open')
    boldTitle.classList.toggle('bold-title')
    arrowDown.classList.toggle('active')
  })
})
