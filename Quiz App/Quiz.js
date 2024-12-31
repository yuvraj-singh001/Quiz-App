const questions = [
    {
        question: "What is the capital of France?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: true},
            {text: "Dublin", correct: false},
        ]
    },
    {
        question: "What is the capital of Ireland?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Paris", correct: false},
            {text: "Dublin", correct: true},
        ]
    },
    {
        question: "What is the capital of England?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: true},
            {text: "Paris", correct: false},
            {text: "Dublin", correct: false},
        ]
    },
    {
        question: "What is the capital of USA?",
        answers:[
            {text: "New York", correct: false},
            {text: "London", correct: false},
            {text: "Washington", correct: true},
            {text: "Dublin", correct: false},
        ]
    },
]

const quest = document.querySelector(".question");
const answerbtn = document.querySelector(".answerbtn");
const nextbtn = document.querySelector(".nextbtn");

let currentquestion  = 0;
let score = 0;

function nextquestion(){
    currentquestion++;
    if(currentquestion < questions.length){
        showquestionandanswer();
    }
    else{
        showscore();
    }
}

function showscore(){
    quest.innerText = "Your score is " + score + " out of " + questions.length;
    answerbtn.innerHTML = "";
    nextbtn.innerText = "Restart";
    nextbtn.style.display = "block";
    nextbtn.addEventListener("click", () =>{
        currentquestion = 0;
        score = 0;
        showquestionandanswer();
    });
}


function showquestionandanswer () {
    resetquestion();

    quest.innerText = questions[currentquestion].question;
    questions[currentquestion].answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);

    })
}

function resetquestion(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswer(e){
    const selectedbutton = e.target;
    const iscorrect = selectedbutton.dataset.correct;
    if(iscorrect){
        selectedbutton.classList.add("correct");
        score++;
    }
    else{
        selectedbutton.classList.add("incorect");
    }
    
    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.classList.remove("hide");
    callnextbtn();
}

function callnextbtn(){
    nextbtn.style.display = "block";
    nextbtn.addEventListener("click", nextquestion);
}



showquestionandanswer();