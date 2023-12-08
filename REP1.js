// script.js


const questions = [
    {
        question: "Parmi ces 5 propositions, quel est le gaz à effet de serre ?",
        answers: [
            { text: "CO2, dioxyde de carbone", correct: false },
            { text: "CH4, méthane", correct: false },
            { text: "N2O, protoxyde d’azote", correct: false },
            { text: "Tous ces gazs", correct:  true },
        ],
        introduction: "Ces 4 gazs sont différents type de gaz à effet de serre à longue durée de vie\n" +
            "Le CO, le plus connu provient de la combustion des énergies fossiles, déforestation, …\n" +
            "Le méthane provient principalement de l’élevage des ruminants, des exploitations pétrolières et gazières.\n" +
            "L'azote est principalement dûes à l’utilisation d’engrais azotés et des procédés chimiques.",
        nextButton: "Suivant"
    },
    // Ajoutez d'autres questions de la même manière

    {
        question: "Parmi ces propositions, laquelle est une solution au changement climatique ?",
        answers: [
            { text: "Réduire les émissions du CO2", correct: false },
            { text: "Planter des arbres", correct: false },
            { text: "Préserver et restaurer les écosystèmes", correct: true },
            { text: "l’utilisation de la bioénergie", correct: false }
        ],
        introduction: "Planter des arbres et l’utilisation de la bioénergie pourrait être une solution mais en réalité, beaucoup plus de dioxyde de carbone est émis, et réduire les émissions de CO2 n’est pas une bonne idée étant donné que nous serons dépendant des GES dans le futur.",
        nextButton: "Suivant"
    },


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

function getcorrectAnswer(position) {
    const currentQuestion = questions[currentQuestionIndex];

    return currentQuestion.answers[position].correct;
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
