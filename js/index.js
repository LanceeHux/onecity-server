const questions = [
    { question: "What is Metagaming (MG)?", choices: ["Buying illegal weapons", "Using OOC information for IC advantage", "Talking in /b chat"], correctAnswer: "Using OOC information for IC advantage" },
    { question: "What is Powergaming (PG)?", choices: ["Winning every fight", "Using /me correctly", "Forcing unrealistic actions on another player"], correctAnswer: "Forcing unrealistic actions on another player" },
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
    { question: "What is the goal of Serious Roleplay?", choices: ["Win every situation", "Create realistic and enjoyable roleplay", "Earn as much money as possible"], correctAnswer: "Create realistic and enjoyable roleplay" },
    { question: "What is Revenge Killing (RK)?", choices: ["Killing someone who previously killed you using information you should not remember", "Calling the police on your attacker", "Reporting a rulebreaker to staff"], correctAnswer: "Killing someone who previously killed you using information you should not remember" },
    { question: "What is Vehicle Deathmatch (VDM)?", choices: ["Driving safely on the correct side of the road", "Using a vehicle to intentionally ram or kill players without a valid reason", "Repairing a broken down vehicle"], correctAnswer: "Using a vehicle to intentionally ram or kill players without a valid reason" },
    { question: "When is it appropriate to use the /ooc chat?", choices: ["To discuss ongoing in-game situations", "For out-of-character questions or general communication", "To insult other players"], correctAnswer: "For out-of-character questions or general communication" },
    { question: "What does IC stand for?", choices: ["Internet Connection", "In-Character", "Internal Control"], correctAnswer: "In-Character" },
    { question: "What does OOC stand for?", choices: ["Out-Of-Character", "Only One City", "Online Operation Center"], correctAnswer: "Out-Of-Character" }
];

const questionText = document.getElementById("question");
const answerInputs = [
  document.getElementById("choice1-btn"),
  document.getElementById("choice2-btn"),
  document.getElementById("choice3-btn")
];
const answerLabels = [
  document.getElementById("choice1-label"),
  document.getElementById("choice2-label"),
  document.getElementById("choice3-label")
];
const questionsContainer = document.getElementById("questions-container");
const takeBtn = document.getElementById("takeBtn");
const submitBtn = document.getElementById("submit-btn");
const finishContainer = document.getElementById("ip-container");

class Exam {
  #currentIndex = 0;
  #score = 0;

  takeExam() {
    if (questionsContainer) {
      questionsContainer.style.display = "flex";
      questionsContainer.style.flexDirection = "column";
    }

    if (submitBtn) {
      submitBtn.style.display = "block";
    }

    if (takeBtn) {
      takeBtn.style.display = "none";
    }

    this.#currentIndex = 0;
    this.#score = 0;
    this.generateQuestion();
  }

  generateQuestion() {
    const currentQuestion = questions[this.#currentIndex];
    if (!currentQuestion || !questionText) return;

    questionText.innerText = currentQuestion.question;

    answerInputs.forEach((input, index) => {
      const label = answerLabels[index];
      const choice = currentQuestion.choices[index];

      if (!input || !label) return;

      input.value = choice || "";
      label.innerText = choice || "";
      input.checked = false;
      input.closest("label").style.display = choice ? "flex" : "none";
    });
  }

  validateAnswer() {
    const selectedChoice = document.querySelector('input[name="choice1"]:checked');
    if (!selectedChoice) {
      alert("Please select an answer before submitting.");
      return;
    }

    const userAnswer = selectedChoice.value;
    const correctAnswer = questions[this.#currentIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
      this.#score++;
      alert("Correct answer!");
    } else {
      alert(`Incorrect answer. The correct answer is: ${correctAnswer}`);
    }

    this.#currentIndex++;
    if (this.#currentIndex < questions.length) {
      this.generateQuestion();
    } else {
      this.finishExam();
    }
  }

  finishExam() {
    const passed = this.#score >= 10;
    const resultMessage = passed
      ? `You passed the test! ${this.#score}/${questions.length}`
      : `You didn't pass the exam, kindly review the server rules. You got ${this.#score}/${questions.length}`;

    alert(resultMessage);

    if (finishContainer) {
      finishContainer.style.display = passed ? "block" : "none";
    }

    if (questionsContainer) {
      questionsContainer.style.display = "none";
    }

    if (submitBtn) {
      submitBtn.style.display = "none";
    }
  }
}

const exam = new Exam();

window.func = exam;

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll(".dev-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("This feature is currently under development.");
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener("click", () => exam.validateAnswer());
  }
});