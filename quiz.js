// Q is shorthand for question

const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffleQ
let currentQindex

startbtn.addEventListener('click', startquiz)
nextbtn.addEventListener('click', ()=> {
    currentQindex++
    nextQ()
})

function startquiz(){
console.log('Quiz Started')
startbtn.classList.add('hide')
shuffleQ = questions.sort(() => Math.random() - 0.5)
currentQindex = 0
questionContainerElement.classList.remove('hide')
nextQ()
}

function nextQ(){
    resetQ()
 showQ (shuffleQ[currentQindex])
}

function showQ (question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText= answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectanswer)
    answerButtonElement.appendChild(button)
    
});
}

function resetQ(){
    nextbtn.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectanswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if(shuffleQ.length > currentQindex + 1){
    nextbtn.classList.remove('hide')  
}
else{
    startbtn.innerText = 'Restart Quiz'
    startbtn.classList.remove('hide')
}
}

function setStatusClass(element, correct){
    clearStatusClass (element)
    if (correct){
        element.classList.add('correct')
    }
        else {
            element.classList.add('incorrect')
        }
    }

    function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('incorrect')
    }

const questions = [
    {
    question: 'Are jaguars herbivores or carnivores?',
    answers: [
        {text: 'Carnivores', correct: true },
        {text: 'Herbivores', correct: false }
    ]
},

{
    question: 'According to the ICUN list, jaguars are Near Threatened.',
    answers: [
        {text: 'False', correct: false },
        {text: 'True', correct: true}
    ]
},

{
    question: 'What is the scientific name for jaguars?',
    answers: [
        {text: 'Jaguar jaguar', correct: false },
        {text: 'Panthera onca', correct: true}
    ]
},

{
    question: 'Jaguars are the only big cat in the Americas?',
    answers: [
        {text: 'False', correct: false },
        {text: 'True', correct: true}
    ]
},

{
    question: 'What is the average life span of a jaguar in the wild?',
    answers: [
        {text: '16 to 19 years', correct: false },
        {text: '12 to 15 years', correct: true}
    ]
}
]

// jaguar facts - https://www.nationalgeographic.com/animals/mammals/facts/jaguar
