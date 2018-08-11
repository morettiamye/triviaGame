// Object for questions/answers

var quizQuestions = [
    {
        question1: "What is Usagi Tsukino's true identity?",
        choices1: ["Sailor Moon", "Sailor Mercury", "Sailor Venus", "Queen Beryl"],
    },

    {
        question2: "Who are the guardian cats?",
        choices2: ["Naru and Umino", "Luna and Artemis", "Haruka and Michiru, Phobos and Deimos"],
    },

    {
        question3: "Who is Chibi-Usa's mother?",
        choices3: ["Princess Serenity", "Queen Serenity", "Neo Queen Serenity", "Sailor Venus"],
    },

    {
        question4: "Who is Usagi's true love?",
        choices4: ["Mamoru", "Seiya", "Motoki", "Haruka"],

    },

    {
        question5: "Who is the Sailor Guardian of rebirth?",
        choices5: ["Sailor Pluto", "Sailor Saturn", "Sailor Uranus", "Sailor Neptune"],
    },
]


// Display Questions/answers
$(".questions").text(quizQuestions[0].question1);

// Timer with start button

$(".timer").html("<button>Start Game</button>");

$("button").on("click", function timeUp() {
    var setTime = setTimeout(gameOver, 6000);  
    console.log("button is working");
});

function gameOver () {
    console.log("times up")
    $(".questions").append("You got some questions right");
}



// Display Score (Create to replace questions)


