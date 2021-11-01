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

const faqDiv = document.querySelector('.questions-answers')

// functions
const createNewElement = element => document.createElement(element)
const addClass = (element, className) => element.classList.add(className)
const addTextContent = (element, text) => (element.textContent = text)

const createFaqCard = (() => {
  const imageSrc = './images/icon-arrow-down.svg'
  // map out questions and answers from questions.js
  questions.map(questionList => {
    const section = createNewElement('section')
    addClass(section, 'question-section')

    const questionTitle = createNewElement('h3')
    addClass(questionTitle, 'question-title')
    addTextContent(questionTitle, questionList.question)

    const arrow = createNewElement('img')
    addClass(arrow, 'arrow-down')
    arrow.src = imageSrc
    arrow.alt = 'arrow down'
    questionTitle.appendChild(arrow)

    const answerText = createNewElement('p')
    addClass(answerText, 'answer-text')
    addTextContent(answerText, questionList.answer)

    const addSections = [questionTitle, answerText]
    addSections.map(addSection => section.appendChild(addSection))

    faqDiv.appendChild(section)
  })
})()

export { createFaqCard }
