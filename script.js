// Start at 12:36 
// or at https://youtu.be/riDzcEQbX6k?list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&t=756
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click",()=>{
    currentQuestionIndex++
    setNextQuestion()
})
var shuffleQuestions , currentQuestionIndex
function startGame() {
    console.log("started" )
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    shuffleQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}
function showQuestion(questions) {
    questionElement.innerText = questions.question

    // also set the aswetrs here
    questions.answers.forEach(answe => {
        const button = document.createElement('button')
        button.innerText = answe.text
        button.classList.add('btn')
        if (answe.correct){
            button.dataset.correct = answe.correct
        }
        button.addEventListener('click' , selectAnswer)

        answerButtonElement.appendChild(button)
    });
}
function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body , correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex + 1){

        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
        // document.body.classList.remove('correct')
        // document.body.classList.remove('wrong')
    }
}

function setStatusClass(ele , correct) {
    clearStatusClass(ele)

    if(correct) {
        ele.classList.add('correct')
    }else{
        ele.classList.add('wrong')
    }
}

function clearStatusClass(ele){
    ele.classList.remove("correct")
    ele.classList.remove("wrong")
}
function resetState() {
    nextButton.classList.add('hide')
    clearStatusClass(document.body)


    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

const questions = [
    {
        question: "What is my Name ?",
        answers: [
            {text:"hk_Davy" , correct: true},
            {text:"Maaldar" , correct: false},
            {text:"Davy_Jones" , correct: false},
            {text:"Hitaish kumar " , correct: false},

        ]
    }
]