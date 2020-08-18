 let timeLeft = 60;
 let timer   
let currentQuestionIndex = 0;

let questions = [
    {
        question: "What color is the sky?", 
        choices: ["blue","red", "purple", "orange"], 
        answer: "blue"
    },
    {
        question: "What is the color of grass?",
        choices: ["green", "pink", "blue", "orange"],
        answer: "green"

    }
]

console.log(questions [currentQuestionIndex].question) 
console.log(questions [currentQuestionIndex].choices)
console.log(questions [currentQuestionIndex].answer)


$("#start-button").on("click", startQuiz)
function startQuiz() {
    $("#start-button").hide()
    timer = setInterval (timeDrop, 1000)
}
function timeDrop() {
timeLeft -- 
console.log (timeLeft)
}
