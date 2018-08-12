//Defining variables
var correct = 0;
var incorrect = 0;


// Object for questions/answers

var quizQuestions = [
    {
        question: "What is Usagi Tsukino's true identity?",
        choice: [ "Sailor Moon", "Sailor Venus", "Sailor Mercury", "Queen Beryl"],
        correct: 1,
    },   
   
    {
        question: "Who is Chibi-Usa's mother?",
        choice: [ "Sailor Moon", "Princess Serenity,", "Queen Serenity", "Neo-Queen Serenity"],
        correct: 3,
    },

    {
        question: "Who are the guardian cats?",
        choice: ["Naru & Umino", "Luna & Artemis", "Haruka & Michiru", "Phobos & Deimos"],
        correct: 2,
    },

    {
        question: "Who is Usagi's true love?",
        choice: [ "Seiya", "Motoki", "Haruka", "Mamoru"],
        correct: 4,
    },
    
    {
        question: "Who is the Sailor Guardian of Rebirth?",
        choice: [ "Sailor Pluto", "Sailor Uranus", "Sailor Saturn", "Sailor Neptune"],
        correct: 3,
    }
]



//Rules
$(".rules").html("<p>Click the start button to begin the quiz.  You get 30 seconds to answer every question.  After 30 seconds the screen will clear and you can see how many answers you got wrong, and how many you got right. Can you get every question right?!")


// Timer with start button
$(".timer").html("<button>Start Game</button>");

$("button").on("click", function timeUp() {
    var setTime = setTimeout(gameOver, 6000);  
    console.log("button is working");
    // Display Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        $(".question" +(i+1)).html("<p>" + quizQuestions[i].question);
    for (let j = 0; j < quizQuestions[i].choice.length; j++) {
        $(".form" +(i+1)).append("<input type='radio' name=\"" + quizQuestions[i].question + "\" + value=\"" + quizQuestions[i].choice[j].guess + "\" >" + "\t" + quizQuestions[i].choice[j].guess + "\t");
        $(".form" +(i+1)).append("<br>");
       
    }
    
}
});

function gameOver () {
    console.log("times up")
    $("#questions").html("<p>" + "Times Up! Let's see your score..");
    $("#questions").append("<p>" + "You got " + correct + " questions right");
    $("#questions").append("<p>" + "You got " + incorrect + " questions wrong");

};