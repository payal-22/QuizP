const questions =[
    {
        questions: "Which STL container can be used in replacement of array?",
        answers:[
            { text: "Set", correct: false},
            { text: "Vector", correct: true},
            { text: "Map", correct: false},
            { text: "Pair", correct: false},
        ]
    },
    {
        questions: "Which of the following works on the principle of LIFO?",
        answers:[
            { text: "Queue", correct: false},
            { text: "list", correct: false},
            { text: "Stack", correct: true},
            { text: "Vector", correct: false},
        ]
    },
    {
        questions: "Which of the following store unique elements only in sorted order?",
        answers:[
            { text: "Array", correct: false},
            { text: "Map", correct: false},
            { text: "Set", correct: true},
            { text: "Vector", correct: false},
        ]
    },
    {
        
            questions: "Which modifier is used to insert elements in a set?",
            answers:[
                { text: "cin>>", correct: false},
                { text: "insert", correct: true},
                { text: "push", correct: false},
                { text: "push_back", correct: false},
            ]
        },
        
         {   questions: "In time complexity O(log(n)), what is the base of log?",
            answers:[
                { text: "1", correct: false},
                { text: "e???", correct: false},
                { text: "2", correct: true},
                { text: "n", correct: false},
            ]
        },
    
         {   questions: "Algorithm to sort elements in descending order in an array[n] is .....",
            answers:[
                { text: "sort(arr,arr+n)", correct: false},
                { text: "sort(arr.end(),arr.begin())", correct: false},
                { text: "sort(arr,arr+n,greater<_int_>)", correct: true},
                { text: "reverse(arr,arr+n)", correct: false},
            ]
        },
    
         {   questions: "What is erase function in a vector?",
            answers:[
                { text: "delete all the elements", correct: false},
                { text: "delete some elements", correct: false},
                { text: "deletes a single element", correct: true},
                { text: "delete element within a range", correct: false},
            ]
        },
    
       
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display ="block";
 }
//  function showScore(){
//     resetState();
//     questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
//     nextButton.innerHTML="Play Again";
//     nextButton.style.display="block";
//  }
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 })
startQuiz();
