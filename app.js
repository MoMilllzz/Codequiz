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

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]
    $("#display-question").html("<h3>"+currentQuestion.question+"</h3>")
let choices=currentQuestion.choices
choices.forEach(function(choice){
    btn=$("<button>")
        btn.text(choice)
        btn.addClass ("choice")
        $("#display-choices").append(btn) 
        
        
        
        
})

$(document).on("click", ".choice", function () {
    console.log ("this works")
    console.log ($(this).text())
})
    // for(let i=0;currentQuestion.choices.length; i++) {
    //     let btn=$("<button>")
    //     btn.text(currentQuestion.choices[i])
    //     $("#display-choices").append(btn) 
    // }
}
// console.log(questions [currentQuestionIndex].question) 
// console.log(questions [currentQuestionIndex].choices)
// console.log(questions [currentQuestionIndex].answer)


$("#start-button").on("click", startQuiz)
function startQuiz() {
    $("#start-button").hide()
    showQuestion()
    timer = setInterval (timeDrop, 1000)
}
function timeDrop() {
timeLeft -- 
console.log (timeLeft)
$("#display-time").html("<h3>Time Left: "+timeLeft+"</h3>")
}
