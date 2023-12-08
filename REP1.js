// script.js
const questions = [
    {
        question: "Parmi ces 5 propositions, quel est le gaz à effet de serre ?",
        answers: [
            { text: "CO2, dioxyde de carbone", correct: false },
            { text: "CH4, méthane", correct: false },
            { text: "N2O, protoxyde d’azote", correct: false },
            { text: "Tous ces gazs", correct: false }
        ],
        introduction: "Ces 4 gazs sont différents type de gaz à effet de serre à longue durée de vie\n" +
            "Le CO, le plus connu provient de la combustion des énergies fossiles, déforestation, …\n" +
            "Le méthane provient principalement de l’élevage des ruminants, des exploitations pétrolières et gazières.\n" +
            "L'azote est principalement dûes à l’utilisation d’engrais azotés et des procédés chimiques.",
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
