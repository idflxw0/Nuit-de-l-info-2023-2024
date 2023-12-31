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

    {
        question: "Parmi ces propositions, pour 2050, quelle énergie a le plus de potentiel pour limiter le réchauffement ?",
        answers: [
            { text: "L'énergie éolienne", correct: false },
            { text: "L’énergie nucléaire", correct: true },
            { text: " L’énergie solaire ", correct: false },
            { text: "L’énergie thermique", correct: false }
        ],
        introduction: "Actuellement à court terme, les énergies éoliennes et solaires sont celles ayant le plus de potentiel, ces énergies se sont très vite développées et sont désormais très peu coûteuses par rapport à l’énergie nucléaire, cela s’explique aussi par le fait que les progrès du nucléaire ont étés plus lent que prévus",
        nextButton: "Suivant"
    },

    {
        question: "Parmi ces propositions, quelle proposition permet de limiter le réchauffement climatique ?",
        answers: [
            { text: "réduire l’utilisation des engrais de synthèse", correct: true },
            { text: "plus de terrain pour des éoliennes", correct: false },
            { text: "l’énergie nucléaire contribue au réchauffement climatique", correct: false },
            { text: "Toutes les réponses", correct: false }
        ],
        introduction: "En réalité, créé plus de terrain pour installer des éoliennes émet plus de gaz à effet de serre qu’on ne le pense, et l’énergie nucléaire contribue à lutter contre le réchauffement climatique",
        nextButton: "Suivant"
    },

    {
        question: "Parmi ces 4 secteurs, lequel est le plus polluant ?",
        answers: [
            { text: "secteur énergétique", correct: true },
            { text: "secteur des transports", correct: false },
            { text: "secteur du bâtiment ", correct: false },
            { text: "secteur de l’agriculture", correct: false }
        ],
        introduction: "Le secteur énergétique est celui qui émet le plus dans le monde, il représente 41% des émissions de la planète contrairement au secteur de l’agriculture qui représente environ 15% des émissions mondiales.",
        nextButton: "Suivant"
    }
];

let currentQuestionIndex = 0;
let nbfaut = 0;

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
        currentQuestionIndex++;
    } else {
        //alert("Mauvaise réponse. Veuillez réessayer.");
        currentQuestionIndex = 0;
        nbfaut++;
        changePhoto(nbfaut);
    }


    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Félicitations, vous avez terminé le quiz !");
        // Vous pouvez rediriger l'utilisateur vers une autre page ici
    }
}

function changePhoto(selectedValue) {
    document.getElementById("container").style.display = "none";
    //document.getElementById("nextButton").style.display = "block";
    let nextbtn = document.getElementById("btnfaut");

    if (selectedValue === 1) {
        document.getElementById("displayPhoto1").style.display = "block";
        nextbtn.style.display = "block";
        nextbtn.addEventListener("click", function () {
            document.getElementById("container").style.display = "block";
            nextbtn.style.display = "none";
            document.getElementById("displayPhoto1").style.display = "none";
            document.getElementById("displayPhoto2").style.display = "none";
            document.getElementById("displayPhoto3").style.display = "none";
            document.getElementById("displayPhoto4").style.display = "none";
            document.getElementById("displayPhoto5").style.display = "none";

        });
    } else if (selectedValue === 2) {
        document.getElementById("displayPhoto2").style.display = "block";
        document.getElementById("faitchier").style.background = "#00546e";
        nextbtn.style.display = "block";
        nextbtn.addEventListener("click", function () {
            document.getElementById("container").style.display = "block";
            nextbtn.style.display = "none";
            document.getElementById("displayPhoto1").style.display = "none";
            document.getElementById("displayPhoto2").style.display = "none";
            document.getElementById("displayPhoto3").style.display = "none";
            document.getElementById("displayPhoto4").style.display = "none";
            document.getElementById("displayPhoto5").style.display = "none";

        });
    } else if (selectedValue === 3) {
        document.getElementById("displayPhoto3").style.display = "block";
        document.getElementById("faitchier").style.background = "#014e69";
        nextbtn.style.display = "block";
        nextbtn.addEventListener("click", function () {
            document.getElementById("container").style.display = "block";
            nextbtn.style.display = "none";
            document.getElementById("displayPhoto1").style.display = "none";
            document.getElementById("displayPhoto2").style.display = "none";
            document.getElementById("displayPhoto3").style.display = "none";
            document.getElementById("displayPhoto4").style.display = "none";
            document.getElementById("displayPhoto5").style.display = "none";

        });
    } else if (selectedValue === 4) {
        document.getElementById("displayPhoto4").style.display = "block";
        document.getElementById("faitchier").style.background = "#014862";
        nextbtn.style.display = "block";
        nextbtn.addEventListener("click", function () {
            document.getElementById("container").style.display = "block";
            nextbtn.style.display = "none";
            document.getElementById("displayPhoto1").style.display = "none";
            document.getElementById("displayPhoto2").style.display = "none";
            document.getElementById("displayPhoto3").style.display = "none";
            document.getElementById("displayPhoto4").style.display = "none";
            document.getElementById("displayPhoto5").style.display = "none";

        });
    } else if (selectedValue === 5) {
        document.getElementById("displayPhoto5").style.display = "block";
        document.getElementById("faitchier").style.background = "#00244f";

    }
}

let boutons = document.querySelectorAll('.answer-button');
for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener('click', function() {
        for (let i = 0; i < 40; i++) {
            createParticle(this);
        }
    });
}

function createParticle(button) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // Position the particle on the button
    const { top, left, width, height } = button.getBoundingClientRect();
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left + width / 2}px`;
    particle.style.top = `${top + height / 2}px`;

    // Randomize the particle's trajectory
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);

    // Remove the particle after animation
    particle.addEventListener('animationend', function() {
        particle.remove();
    });
}

// Afficher la première question au chargement de la page
displayQuestion();
