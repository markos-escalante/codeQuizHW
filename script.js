var quizBodyEl = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameOverEl = document.getElementById("gameOver");
var questionsEl = document.getElementById("questions");
var quizTimerEl = document.getElementById("timer");
var startQuizBtn = document.getElementById("startBtn");
var startQuizEl = document.getElementById("startPage");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScoreInputName = document.getElementById("initials");
var highScoreDisplayName = document.getElementById("highScoreIntls");
var endGameBtn = document.getElementById("endGameBtn");
var submitScoreBtn = document.getElementById("submitScore");
var highScoreDisplayScore = document.getElementById("highDisplay");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var quizQuestions = [
    {   question: "What will console.log(hello!.length); print?:",
        answers: ["hello!", "5", "undefined", "6"],
        answer:  "6"
    },
    {
        question: "How do we create a single line comment on Javascript?",
        answers: ["/* */", "// //", "{}", "<!-- -->"],
        answer: "// //"
    },
    {
        question: "How do you create a new file using your console's terminal?",
        answers: ["touch", "code .", "create", "new"],
        answer: "touch"
    },
    {
        question: "In HTML, what tag is used to make your text into an emphasized (italics) version?",
        answers: ["br", "strong", "em", "bold"],
        answer: "em"
    },
    {
        question: "How do we create a single line comment on Javascript?",
        answers: ["Javascript", "terminal bash", "for loops", "console log"],
        answer: "console log"
    }
];

var finalQuestions = quizQuestions.length;
var currentQuestions = 0;
var timeLeft = 70;
var timeInterval;
var score = 0;

function generateQuizQuestions() {
    gameOverEl.style.display = "none";
    if (currentQuestions === finalQuestions) {
        return showScore();
    }    
    var finalQuestions = quizQuestions[currentQuestions];
    questionsEl.innerHTML = "<p>" + currentQuestions.question + "</p>";
    buttonA.innerHTML = currentQuestions.buttonA
    buttonB.innerHTML = currentQuestions.buttonB
    buttonC.innerHTML = currentQuestions.buttonC
    buttonD.innerHTML = currentQuestions.buttonD
    
};

function startQuiz() {
    gameOverEl.style.display = "none";
    startQuizEl.style.display = "none";
    generateQuizQuestions(); 
    timeInterval = setInterval(function(){
        timeLeft--;
        quizTimerEl.textContent = "time left " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            showScore();
        } 
    })
}

function showScore() {
    quizBodyEl.style.display = "none";
    gameOverEl.style.display = "none";
    clearInterval(timeInterval);
    highScoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score +" out of " + quizQuestions.length;
}

function clearScore() {
    window.localStorage.clear();
    highScoreDisplayName.textContent = "";
    highScoreDisplayScore.textContent = "";
}

function replayQuiz() {
    highScoreContainer.style.display = "none";
    gameOverEl.style.display = "none";
    startQuizEl.style.display = "none";
    timeLeft = 76;
    score = 0;
    currentQuestions = 0;
}

function checkAnswer(answer) {
    if (answer === correct){
        alert("That is correct!");
        currentQuestions++;
        generateQuizQuestions();
    } else {
        showScore();
    }
}

startQuizBtn.addEventListener("click", startQuiz);

