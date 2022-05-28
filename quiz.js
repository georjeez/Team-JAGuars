// Q is shorthand for question

const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

const startname = document.getElementById('qn1')
const resultbox = document.getElementById('resultBox')
var correctAns = 0

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
    startname.classList.add('hide')
    resultbox.classList.add('hide')
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
if (correct) {
    correctAns++
}
setStatusClass(document.body, correct)
Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if(shuffleQ.length > currentQindex + 1){
    nextbtn.classList.remove('hide')  
}
else{
    resultbox.classList.remove('hide')
    resultbox.innerText = "You got " + correctAns.toString() + "/" + shuffleQ.length.toString() + " correct!"
    correctAns = 0
    startbtn.innerText = 'Restart Quiz'
    startbtn.style.color = 'white'
    startbtn.style.fontSize = '21px'
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
    question: 'What diet do jaguars follow?',
    answers: [
        {text: 'Omnivorous', correct: false },
        {text: 'Herbivorous', correct: false },
        {text: 'Frugivorous', correct: false },
        {text: 'Carnivorous', correct: true },
    ]
},

{
    question: 'According to the ICUN Red List, jaguars are catergorised as which threat classification?',
    answers: [
        {text: 'Least Concern', correct: false },
        {text: 'Near Threatened', correct: true},
        {text: 'Vulnerable', correct: false },
        {text: 'Critically Endangered', correct: false },
    ]
},

{
    question: 'What is the scientific name for jaguars?',
    answers: [
        {text: 'Panthera onca', correct: true},
        {text: 'Panthera pardus', correct: false },
        {text: 'Jaguar jaguar', correct: false },
        {text: 'Panthera uncia', correct: false },
    ]
},

{
    question: 'Jaguars are the only big cat in the Americas?',
    answers: [
        {text: 'True', correct: false},
        {text: 'False', correct: true}
    ]
},

{
    question: 'What is the average life span of a jaguar in the wild?',
    answers: [
        {text: '18 to 21 years', correct: false },
        {text: '15 to 18 years', correct: false },
        {text: '12 to 15 years', correct: true},
        {text: '9 to 12 years', correct: false }
    ]
}
]


// jaguar facts-  https://www.nationalgeographic.com/animals/mammals/facts/jaguar
//                https://www.iucnredlist.org/species/15953/123791436
//                https://www.iucn.org/news/commission-environmental-economic-and-social-policy/202110/black-jaguar-and-guardian-forest
// big cat facts- https://en.wikipedia.org/wiki/Big_cat

// embed this map https://www.inaturalist.org/taxa/41970-Panthera-onca 
//