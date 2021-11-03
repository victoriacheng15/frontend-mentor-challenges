const questions = [
  {
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
]

const faqDiv = document.querySelector('.card-faq')

// functions
const createNewElement = element => document.createElement(element)
const addClass = (element, className) => element.classList.add(className)
const addTextContent = (element, text) => (element.textContent = text)

const createFaqCard = (() => {
  const imageSrc = './images/icon-arrow-down.svg'
  // map out questions and answers from questions.js
  questions.map(questionList => {
    const article = createNewElement('article')
    addClass(article, 'card-faq-section')

    const questionDiv = createNewElement('div')
    addClass(questionDiv, 'title-group')

    const questionTitle = createNewElement('h3')
    addClass(questionTitle, 'question-title')
    addTextContent(questionTitle, questionList.question)

    const arrowImg = createNewElement('img')
    addClass(arrowImg, 'arrow-down')
    arrowImg.src = imageSrc
    arrowImg.alt = 'arrow down'

    const addToQuestionDivs = [questionTitle, arrowImg]
    addToQuestionDivs.map(addToQuestionDiv => questionDiv.appendChild(addToQuestionDiv))

    const answerText = createNewElement('p')
    addClass(answerText, 'answer-text')
    addTextContent(answerText, questionList.answer)

    const addToSections = [questionDiv, answerText]
    addToSections.map(addToSection => article.appendChild(addToSection))

    faqDiv.appendChild(article)
  })
})()

export { createFaqCard }
