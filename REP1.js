// script.js
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Londres", correct: false }
        ],
        introduction: "Paris est la capitale de la France. C'est une ville connue pour sa riche histoire et sa culture.",
        nextButton: "Suivant"
    },
    // Ajoutez d'autres questions de la même manière
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-button");

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.innerHTML = currentQuestion.answers[index].text;
    });
}

function checkAnswer(isCorrect) {
    const currentQuestion = questions[currentQuestionIndex];

    if (isCorrect) {
        alert("Bonne réponse !\n\n" + currentQuestion.introduction);
    } else {
        alert("Mauvaise réponse. Veuillez réessayer.");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Félicitations, vous avez terminé le quiz !");
        // Vous pouvez rediriger l'utilisateur vers une autre page ici
    }
}

// Afficher la première question au chargement de la page
displayQuestion();
