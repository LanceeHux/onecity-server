// variables
let i = true;
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name-input");
const totalQuestions = 15;
const answeredQuestions = new Set();
// questions variables
const q1 = document.getElementById("q1-question");
const q2 = document.getElementById("q2-question");
const q3 = document.getElementById("q3-question");
const q4 = document.getElementById("q4-question");
const q5 = document.getElementById("q5-question");
const q6 = document.getElementById("q6-question");
const q7 = document.getElementById("q7-question");
const q8 = document.getElementById("q8-question");
const q9 = document.getElementById("q9-question");
const q10 = document.getElementById("q10-question");
const q11 = document.getElementById("q11-question");
const q12 = document.getElementById("q12-question");
const q13 = document.getElementById("q13-question");
const q14 = document.getElementById("q14-question");
const q15 = document.getElementById("q15-question");
// choice 1
const q1Choice1Btn = document.getElementById("q1-choice1-btn");
const q1Choice2Btn = document.getElementById("q1-choice2-btn");
const q1Choice3Btn = document.getElementById("q1-choice3-btn");
// answer texts
const q1Choice1Answer = document.getElementById("q1-choice1-answer");
const q1Choice2Answer = document.getElementById("q1-choice2-answer");
const q1Choice3Answer = document.getElementById("q1-choice3-answer");
// choice 2
const q2Choice1Btn = document.getElementById("q2-choice1-btn");
const q2Choice2Btn = document.getElementById("q2-choice2-btn");
const q2Choice3Btn = document.getElementById("q2-choice3-btn");
// answer texts
const q2Choice1Answer = document.getElementById("q2-choice1-answer");
const q2Choice2Answer = document.getElementById("q2-choice2-answer");
const q2Choice3Answer = document.getElementById("q2-choice3-answer");
// choice 3
const q3Choice1Btn = document.getElementById("q3-choice1-btn");
const q3Choice2Btn = document.getElementById("q3-choice2-btn");
const q3Choice3Btn = document.getElementById("q3-choice3-btn");
// answer texts
const q3Choice1Answer = document.getElementById("q3-choice1-answer");
const q3Choice2Answer = document.getElementById("q3-choice2-answer");
const q3Choice3Answer = document.getElementById("q3-choice3-answer");
// choice 4
const q4Choice1Btn = document.getElementById("q4-choice1-btn");
const q4Choice2Btn = document.getElementById("q4-choice2-btn");
const q4Choice3Btn = document.getElementById("q4-choice3-btn");
// answer texts
const q4Choice1Answer = document.getElementById("q4-choice1-answer");
const q4Choice2Answer = document.getElementById("q4-choice2-answer");
const q4Choice3Answer = document.getElementById("q4-choice3-answer");
// choice 5
const q5Choice1Btn = document.getElementById("q5-choice1-btn");
const q5Choice2Btn = document.getElementById("q5-choice2-btn");
const q5Choice3Btn = document.getElementById("q5-choice3-btn");
// answer texts
const q5Choice1Answer = document.getElementById("q5-choice1-answer");
const q5Choice2Answer = document.getElementById("q5-choice2-answer");
const q5Choice3Answer = document.getElementById("q5-choice3-answer");
// choice 6
const q6Choice1Btn = document.getElementById("q6-choice1-btn");
const q6Choice2Btn = document.getElementById("q6-choice2-btn");
const q6Choice3Btn = document.getElementById("q6-choice3-btn");
// answer texts
const q6Choice1Answer = document.getElementById("q6-choice1-answer");
const q6Choice2Answer = document.getElementById("q6-choice2-answer");
const q6Choice3Answer = document.getElementById("q6-choice3-answer");
// choice 7
const q7Choice1Btn = document.getElementById("q7-choice1-btn");
const q7Choice2Btn = document.getElementById("q7-choice2-btn");
const q7Choice3Btn = document.getElementById("q7-choice3-btn");
// answer texts
const q7Choice1Answer = document.getElementById("q7-choice1-answer");
const q7Choice2Answer = document.getElementById("q7-choice2-answer");
const q7Choice3Answer = document.getElementById("q7-choice3-answer");
// choice 8
const q8Choice1Btn = document.getElementById("q8-choice1-btn");
const q8Choice2Btn = document.getElementById("q8-choice2-btn");
const q8Choice3Btn = document.getElementById("q8-choice3-btn");
// answer texts
const q8Choice1Answer = document.getElementById("q8-choice1-answer");
const q8Choice2Answer = document.getElementById("q8-choice2-answer");
const q8Choice3Answer = document.getElementById("q8-choice3-answer");
// choice 9
const q9Choice1Btn = document.getElementById("q9-choice1-btn");
const q9Choice2Btn = document.getElementById("q9-choice2-btn");
const q9Choice3Btn = document.getElementById("q9-choice3-btn");
// answer texts
const q9Choice1Answer = document.getElementById("q9-choice1-answer");
const q9Choice2Answer = document.getElementById("q9-choice2-answer");
const q9Choice3Answer = document.getElementById("q9-choice3-answer");
// choice 10
const q10Choice1Btn = document.getElementById("q10-choice1-btn");
const q10Choice2Btn = document.getElementById("q10-choice2-btn");
const q10Choice3Btn = document.getElementById("q10-choice3-btn");
// answer texts
const q10Choice1Answer = document.getElementById("q10-choice1-answer");
const q10Choice2Answer = document.getElementById("q10-choice2-answer");
const q10Choice3Answer = document.getElementById("q10-choice3-answer");
// choice 11
const q11Choice1Btn = document.getElementById("q11-choice1-btn");
const q11Choice2Btn = document.getElementById("q11-choice2-btn");
const q11Choice3Btn = document.getElementById("q11-choice3-btn");
// answer texts
const q11Choice1Answer = document.getElementById("q11-choice1-answer");
const q11Choice2Answer = document.getElementById("q11-choice2-answer");
const q11Choice3Answer = document.getElementById("q11-choice3-answer");
// choice 12
const q12Choice1Btn = document.getElementById("q12-choice1-btn");
const q12Choice2Btn = document.getElementById("q12-choice2-btn");
const q12Choice3Btn = document.getElementById("q12-choice3-btn");
// answer texts
const q12Choice1Answer = document.getElementById("q12-choice1-answer");
const q12Choice2Answer = document.getElementById("q12-choice2-answer");
const q12Choice3Answer = document.getElementById("q12-choice3-answer");
// choice 13
const q13Choice1Btn = document.getElementById("q13-choice1-btn");
const q13Choice2Btn = document.getElementById("q13-choice2-btn");
const q13Choice3Btn = document.getElementById("q13-choice3-btn");
// answer texts
const q13Choice1Answer = document.getElementById("q13-choice1-answer");
const q13Choice2Answer = document.getElementById("q13-choice2-answer");
const q13Choice3Answer = document.getElementById("q13-choice3-answer");
// choice 14
const q14Choice1Btn = document.getElementById("q14-choice1-btn");
const q14Choice2Btn = document.getElementById("q14-choice2-btn");
const q14Choice3Btn = document.getElementById("q14-choice3-btn");
// answer texts
const q14Choice1Answer = document.getElementById("q14-choice1-answer");
const q14Choice2Answer = document.getElementById("q14-choice2-answer");
const q14Choice3Answer = document.getElementById("q14-choice3-answer");
// choice 15
const q15Choice1Btn = document.getElementById("q15-choice1-btn");
const q15Choice2Btn = document.getElementById("q15-choice2-btn");
const q15Choice3Btn = document.getElementById("q15-choice3-btn");
// answer texts
const q15Choice1Answer = document.getElementById("q15-choice1-answer");
const q15Choice2Answer = document.getElementById("q15-choice2-answer");
const q15Choice3Answer = document.getElementById("q15-choice3-answer");

const questions = {
    q1: { question: "What is Metagaming (MG)?", choices: ["Buying illegal weapons", "Using OOC information for IC advantage", "Talking in /b chat"], correctAnswer: "Using OOC information for IC advantage" },
    q2: { question: "What is Powergaming (PG)?", choices: ["Winning every fight", "B. Using /me correctly", "Forcing unrealistic actions on another player"], correctAnswer: "Forcing unrealistic actions on another player" },
    q3: { question: "What is Random Deathmatch (RDM)?", choices: ["Killing a player without a valid IC reason", "Self-defense during a robbery", "Participating in a gang war"], correctAnswer: "Killing a player without a valid IC reason" },
    q4: { question: "What should you do when someone has a gun pointed at you?", choices: ["Ignore them", "Value your life and comply when reasonable", "Always attack first"], correctAnswer: "Value your life and comply when reasonable" },
    q5: { question: "What is Combat Logging?", choices: ["Changing weapons during a fight", "Rejoining after a crash", "Disconnecting to avoid roleplay or punishment"], correctAnswer: "Disconnecting to avoid roleplay or punishment" },
    q6: { question: "Is Bunny Hopping to move faster allowed?", choices: ["Yes", "No"], correctAnswer: "No" },
    q7: { question: "Which weapon is allowed for Street and Store Robberies?", choices: ["M4", "AK-47", "Desert Eagle (Deagle)"], correctAnswer: "Desert Eagle (Deagle)" },
    q8: { question: "Which robbery allows long firearms?", choices: ["Bank Robbery", "Street Robbery", "Store Robbery"], correctAnswer: "Bank Robbery" },
    q9: { question: "What is the minimum number of members required for an Official Gang?", choices: ["3", "5", "10"], correctAnswer: "5" },
    q10: { question: "Can you use cheats or exploit bugs?", choices: ["Only if nobody sees", "Only during events", "No, never"], correctAnswer: "No, never" },
    q11: { question: "Can you return to an active turf after dying?", choices: ["Yes", "No", "Only if you have a medic"], correctAnswer: "No" },
    q12: { question: "What should you do if a staff member gives you an instruction?", choices: ["Ignore it", "Follow it and appeal later if necessary", "Argue in-game"], correctAnswer: "Follow it and appeal later if necessary" },
    q13: { question: "Is robbing a newly spawned player allowed?", choices: ["Yes", "Only at night", "No"], correctAnswer: "No" },
    q14: { question: "What should you do if your game crashes during an RP situation?", choices: ["Rejoin immediately and continue the RP if possible", "Wait 30 minutes before joining", "Start a new RP somewhere else"], correctAnswer: "Rejoin immediately and continue the RP if possible" },
    q15: { question: "What is the goal of Serious Roleplay?", choices: ["Win every situation", "Create realistic and enjoyable roleplay", "Earn as much money as possible"], correctAnswer: "Create realistic and enjoyable roleplay" }
};

function syncSubmitButtonState() {
    const hasName = nameInput && nameInput.value.trim() !== "";
    submitBtn.disabled = !(hasName && answeredQuestions.size === totalQuestions);
}

class Functions {
    showBtns() {
    let status = i === true ? document.querySelector(".header-buttons").classList.add("show") : document.querySelector(".header-buttons").classList.remove("show");
    i = !i;
    }
    takeExam() {
        const questionsContainer = document.getElementById("questions-container");
        questionsContainer.style.display = "flex";
        questionsContainer.style.flexDirection = "column";
        this.attachAnswerEvents();
        this.generateQuestions();
        syncSubmitButtonState();
    }
    attachAnswerEvents() {
        document.querySelectorAll(".question").forEach((questionBlock) => {
            const questionKey = questionBlock.querySelector("h3").id.replace("-question", "");
            const options = Array.from(questionBlock.querySelectorAll("input[type='checkbox']"));

            options.forEach((option) => {
                option.addEventListener("change", () => {
                    if (option.checked) {
                        options.forEach((otherOption) => {
                            if (otherOption !== option) {
                                otherOption.checked = false;
                            }
                        });
                    }

                    const hasSelectedAnswer = options.some((item) => item.checked);
                    if (hasSelectedAnswer) {
                        answeredQuestions.add(questionKey);
                    } else {
                        answeredQuestions.delete(questionKey);
                    }

                    syncSubmitButtonState();
                });
            });
        });

        document.querySelectorAll(".choices label").forEach((label) => {
            label.addEventListener("click", (event) => {
                event.preventDefault();
                const inputName = label.id.replace("-answer", "-btn");
                const checkbox = document.getElementById(inputName);

                if (!checkbox) {
                    return;
                }

                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event("change", { bubbles: true }));
            });
        });

        if (nameInput) {
            nameInput.addEventListener("input", syncSubmitButtonState);
        }
    }
    generateQuestions() {
        q1.innerText = questions.q1.question;
        q1Choice1Answer.innerText = questions.q1.choices[0];
        q1Choice2Answer.innerText = questions.q1.choices[1];
        q1Choice3Answer.innerText = questions.q1.choices[2];

        q2.innerText = questions.q2.question;
        q2Choice1Answer.innerText = questions.q2.choices[0];
        q2Choice2Answer.innerText = questions.q2.choices[1];
        q2Choice3Answer.innerText = questions.q2.choices[2];

        q3.innerText = questions.q3.question;
        q3Choice1Answer.innerText = questions.q3.choices[0];
        q3Choice2Answer.innerText = questions.q3.choices[1];
        q3Choice3Answer.innerText = questions.q3.choices[2];

        q4.innerText = questions.q4.question;
        q4Choice1Answer.innerText = questions.q4.choices[0];
        q4Choice2Answer.innerText = questions.q4.choices[1];
        q4Choice3Answer.innerText = questions.q4.choices[2];

        q5.innerText = questions.q5.question;
        q5Choice1Answer.innerText = questions.q5.choices[0];
        q5Choice2Answer.innerText = questions.q5.choices[1];
        q5Choice3Answer.innerText = questions.q5.choices[2];

        q6.innerText = questions.q6.question;
        q6Choice1Answer.innerText = questions.q6.choices[0];
        q6Choice2Answer.innerText = questions.q6.choices[1];
        q6Choice3Answer.innerText = questions.q6.choices[2];

        q7.innerText = questions.q7.question;
        q7Choice1Answer.innerText = questions.q7.choices[0];
        q7Choice2Answer.innerText = questions.q7.choices[1];
        q7Choice3Answer.innerText = questions.q7.choices[2];

        q8.innerText = questions.q8.question;
        q8Choice1Answer.innerText = questions.q8.choices[0];
        q8Choice2Answer.innerText = questions.q8.choices[1];
        q8Choice3Answer.innerText = questions.q8.choices[2];

        q9.innerText = questions.q9.question;
        q9Choice1Answer.innerText = questions.q9.choices[0];
        q9Choice2Answer.innerText = questions.q9.choices[1];
        q9Choice3Answer.innerText = questions.q9.choices[2];

        q10.innerText = questions.q10.question;
        q10Choice1Answer.innerText = questions.q10.choices[0];
        q10Choice2Answer.innerText = questions.q10.choices[1];
        q10Choice3Answer.innerText = questions.q10.choices[2];

        q11.innerText = questions.q11.question;
        q11Choice1Answer.innerText = questions.q11.choices[0];
        q11Choice2Answer.innerText = questions.q11.choices[1];
        q11Choice3Answer.innerText = questions.q11.choices[2];

        q12.innerText = questions.q12.question;
        q12Choice1Answer.innerText = questions.q12.choices[0];
        q12Choice2Answer.innerText = questions.q12.choices[1];
        q12Choice3Answer.innerText = questions.q12.choices[2];

        q13.innerText = questions.q13.question;
        q13Choice1Answer.innerText = questions.q13.choices[0];
        q13Choice2Answer.innerText = questions.q13.choices[1];
        q13Choice3Answer.innerText = questions.q13.choices[2];

        q14.innerText = questions.q14.question;
        q14Choice1Answer.innerText = questions.q14.choices[0];
        q14Choice2Answer.innerText = questions.q14.choices[1];
        q14Choice3Answer.innerText = questions.q14.choices[2];

        q15.innerText = questions.q15.question;
        q15Choice1Answer.innerText = questions.q15.choices[0];
        q15Choice2Answer.innerText = questions.q15.choices[1];
        q15Choice3Answer.innerText = questions.q15.choices[2];
    }
    validateAnswers() {
        let score = 0;
        const userAnswers = {
            q1: this.getUserAnswer(q1Choice1Btn, q1Choice2Btn, q1Choice3Btn),
            q2: this.getUserAnswer(q2Choice1Btn, q2Choice2Btn, q2Choice3Btn),
            q3: this.getUserAnswer(q3Choice1Btn, q3Choice2Btn, q3Choice3Btn),
            q4: this.getUserAnswer(q4Choice1Btn, q4Choice2Btn, q4Choice3Btn),
            q5: this.getUserAnswer(q5Choice1Btn, q5Choice2Btn, q5Choice3Btn),
            q6: this.getUserAnswer(q6Choice1Btn, q6Choice2Btn, q6Choice3Btn),
            q7: this.getUserAnswer(q7Choice1Btn, q7Choice2Btn, q7Choice3Btn),
            q8: this.getUserAnswer(q8Choice1Btn, q8Choice2Btn, q8Choice3Btn),
            q9: this.getUserAnswer(q9Choice1Btn, q9Choice2Btn, q9Choice3Btn),
            q10: this.getUserAnswer(q10Choice1Btn, q10Choice2Btn, q10Choice3Btn),
            q11: this.getUserAnswer(q11Choice1Btn, q11Choice2Btn, q11Choice3Btn),
            q12: this.getUserAnswer(q12Choice1Btn, q12Choice2Btn, q12Choice3Btn),
            q13: this.getUserAnswer(q13Choice1Btn, q13Choice2Btn, q13Choice3Btn),
            q14: this.getUserAnswer(q14Choice1Btn, q14Choice2Btn, q14Choice3Btn),
            q15: this.getUserAnswer(q15Choice1Btn, q15Choice2Btn, q15Choice3Btn)
        };

        for (const question in userAnswers) {
            if (userAnswers[question] === questions[question].correctAnswer) {
                score++;
            }
        }

        alert(`You scored ${score} out of 15.`);
    }

    getUserAnswer(choice1Btn, choice2Btn, choice3Btn) {
        const selectedOption = [choice1Btn, choice2Btn, choice3Btn].find((option) => option?.checked);
        return selectedOption?.nextElementSibling?.innerText ?? null;
    }
    submitExam() {
        this.validateAnswers();
    }
}
const func = new Functions();