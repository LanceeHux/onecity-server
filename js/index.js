// variables
let i = true;
let index = 0;
let scores =0;
const takeBtn = document.getElementById("takeBtn");
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name-input");
const finish = document.getElementById("ip-container");
// questions variables
const question = document.getElementById("question");
const choice1Btn = document.getElementById("choice1-btn");
const choice1Label = document.getElementById("choice1-label");
const choice2Btn = document.getElementById("choice2-btn");
const choice2Label = document.getElementById("choice2-label");
const choice3Btn = document.getElementById("choice3-btn");
const choice3Label = document.getElementById("choice3-label");

const questions = [
    { question: "What is Metagaming (MG)?", choices: ["Buying illegal weapons", "Using OOC information for IC advantage", "Talking in /b chat"], correctAnswer: "Using OOC information for IC advantage" },
    { question: "What is Powergaming (PG)?", choices: ["Winning every fight", "B. Using /me correctly", "Forcing unrealistic actions on another player"], correctAnswer: "Forcing unrealistic actions on another player" },
    { question: "What is Random Deathmatch (RDM)?", choices: ["Killing a player without a valid IC reason", "Self-defense during a robbery", "Participating in a gang war"], correctAnswer: "Killing a player without a valid IC reason" },
    { question: "What should you do when someone has a gun pointed at you?", choices: ["Ignore them", "Value your life and comply when reasonable", "Always attack first"], correctAnswer: "Value your life and comply when reasonable" },
    { question: "What is Combat Logging?", choices: ["Changing weapons during a fight", "Rejoining after a crash", "Disconnecting to avoid roleplay or punishment"], correctAnswer: "Disconnecting to avoid roleplay or punishment" },
    { question: "Is Bunny Hopping to move faster allowed?", choices: ["Yes", "No"], correctAnswer: "No" },
    { question: "Which weapon is allowed for Street and Store Robberies?", choices: ["M4", "AK-47", "Desert Eagle (Deagle)"], correctAnswer: "Desert Eagle (Deagle)" },
    { question: "Which robbery allows long firearms?", choices: ["Bank Robbery", "Street Robbery", "Store Robbery"], correctAnswer: "Bank Robbery" },
    { question: "What is the minimum number of members required for an Official Gang?", choices: ["3", "5", "10"], correctAnswer: "5" },
    { question: "Can you use cheats or exploit bugs?", choices: ["Only if nobody sees", "Only during events", "No, never"], correctAnswer: "No, never" },
    { question: "Can you return to an active turf after dying?", choices: ["Yes", "No", "Only if you have a medic"], correctAnswer: "No" },
    { question: "What should you do if a staff member gives you an instruction?", choices: ["Ignore it", "Follow it and appeal later if necessary", "Argue in-game"], correctAnswer: "Follow it and appeal later if necessary" },
    { question: "Is robbing a newly spawned player allowed?", choices: ["Yes", "Only at night", "No"], correctAnswer: "No" },
    { question: "What should you do if your game crashes during an RP situation?", choices: ["Rejoin immediately and continue the RP if possible", "Wait 30 minutes before joining", "Start a new RP somewhere else"], correctAnswer: "Rejoin immediately and continue the RP if possible" },
    { question: "What is the goal of Serious Roleplay?", choices: ["Win every situation", "Create realistic and enjoyable roleplay", "Earn as much money as possible"], correctAnswer: "Create realistic and enjoyable roleplay" }
];

class Functions {
    #score = 0;
    showBtns() {
    let status = i === true ? document.querySelector(".header-buttons").classList.add("show") : document.querySelector(".header-buttons").classList.remove("show");
    i = !i;
    }
    takeExam() {
        const questionsContainer = document.getElementById("questions-container");
        questionsContainer.style.display = "flex";
        questionsContainer.style.flexDirection = "column";
        this.generateQuestion();
    }
    generateQuestion() {
        question.innerText = questions[index].question;
        choice1Label.innerText = questions[index].choices[0];
        choice2Label.innerText = questions[index].choices[1];
        choice3Label.innerText = questions[index].choices[2];

        choice1Btn.value = questions[index].choices[0];
        choice2Btn.value = questions[index].choices[1];
        choice3Btn.value = questions[index].choices[2];
    }
    validateAnswer() {
        const selectedChoice = document.querySelector('input[name="choice1"]:checked');
        if (selectedChoice) {
            const userAnswer = selectedChoice.value;
            const correctAnswer = questions[index].correctAnswer;
            if (userAnswer === correctAnswer) {
                alert("Correct answer!");
                this.#score++;
                scores++;
            } else {
                alert("Incorrect answer. The correct answer is: " + correctAnswer);
            }
            index++;
            if (index < questions.length) {
                this.generateQuestion();
            } else {
                alert("Exam completed!");
                finish.style.display = "block";
           document.querySelector(".questions-container").style.display = "none";
           document.getElementById("submit-btn").style.display = "none";
takeBtn.style.display="none";

            }
        } else {
            alert("Please select an answer before submitting.");
        }
    }
    submitExam() {
     if (index < questions.length) {
        this.validateAnswer();
     }
    }
}
const func = new Functions();