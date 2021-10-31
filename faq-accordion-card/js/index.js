import { questions } from './questions.js'

const faqDiv = document.querySelector('.questions-answers')

// functions
const createNewElement = element => document.createElement(element)
const addClass = (element, className) => element.classList.add(className)
const addTextContent = (element, text) => (element.textContent = text)

const createFaqCard = (() => {
  // map out questions from questions.js
  questions.map(questionList => {
    const section = createNewElement('section')
    addClass(section, 'question-section')

    const questionTitle = createNewElement('h3')
    addClass(questionTitle, 'question-title')
    addTextContent(questionTitle, questionList.question)

    const answerText = createNewElement('p')
    addClass(answerText, 'answer-text')
    addTextContent(answerText, questionList.answer)

    const addSections = [questionTitle, answerText]
    addSections.map(addSection => section.appendChild(addSection))

    faqDiv.appendChild(section)
  })
})()
