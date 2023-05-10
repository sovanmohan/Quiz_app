const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the highest mountain in the world?",
        answers: {
            a: "Mount Everest",
            b: "Mount Kilimanjaro",
            c: "Mount Fuji"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest country in the world?",
        answers: {
            a: "China",
            b: "Russia",
            c: "United States"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (const letter in currentQuestion.answers) {
            answers.push(
                `<label>
					<input type="radio" name="question${questionNumber}" value="${letter}">
					${letter}: ${currentQuestion.answers[letter]}
				</label>`
            );
        }

        output.push(
            `<div class="question">
				<h2>${currentQuestion.question}</h2>
				<div class="answers">${answers.join('')}</div>
			</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer
}
buildQuiz();

submitButton.addEventListener('click', showResults);