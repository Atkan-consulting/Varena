// Variables globales
let currentUser = {};
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let currentQuestions = [];
let quizMode = '';
let timer = null;
let timeLeft = 20;
let isAnswerRevealed = false;
let wrongAnswers = [];

document.addEventListener('DOMContentLoaded', () => {
    // Gestion de la sélection de mode
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('quizMode').value = this.dataset.mode;
        });
    });

    // Gestion de l'écran de connexion
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const role = document.getElementById('role').value;
        const level = document.getElementById('level').value;
        const mode = document.getElementById('quizMode').value;
        
        if (firstName && lastName && role && level && mode) {
            currentUser = { firstName, lastName, role, level };
            quizMode = mode;
            startQuiz();
        } else {
            alert("Veuillez remplir tous les champs et sélectionner un mode.");
        }
    });
});

function startQuiz() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    
    // La variable 'questionsByRole' vient du fichier questions.js
    const questionsForRole = questionsByRole[currentUser.role] || [];
    if(questionsForRole.length === 0){
        alert("Aucune question n'est disponible pour ce rôle pour le moment.");
        restartQuiz();
        return;
    }

    // Mélanger les questions et en prendre 15
    currentQuestions = [...questionsForRole].sort(() => Math.random() - 0.5).slice(0, 15);
    
    document.getElementById('userDisplay').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    document.getElementById('roleDisplay').textContent = ` - ${getRoleDisplayName(currentUser.role)}`;
    document.getElementById('levelDisplay').textContent = ` - Niveau ${currentUser.level}`;
    document.getElementById('modeDisplay').textContent = ` - Mode ${quizMode === 'training' ? 'Entraînement' : 'Examen'}`;
    
    if (quizMode === 'exam') {
        document.getElementById('timerDisplay').classList.remove('hidden');
    } else {
        document.getElementById('timerDisplay').classList.add('hidden');
    }
    
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    score = 0;
    wrongAnswers = [];
    
    displayQuestion();
}

function getRoleDisplayName(role) {
    return {
        'central': 'Arbitre Central',
        'assistant': 'Arbitre Assistant'
    }[role] || role;
}

function displayQuestion() {
    if (currentQuestions.length === 0) return;
    const question = currentQuestions[currentQuestionIndex];
    isAnswerRevealed = false;

    document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} sur ${currentQuestions.length}`;
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('themeBadge').textContent = question.theme;
    
    const difficultyBadge = document.getElementById('difficultyBadge');
    difficultyBadge.textContent = question.difficulty;
    difficultyBadge.className = `difficulty-badge difficulty-${question.difficulty}`;
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('answerExplanation').classList.add('hidden');
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(optionElement, option));
        
        if (userAnswers[currentQuestionIndex] === option) {
            optionElement.classList.add('selected');
        }
        optionsContainer.appendChild(optionElement);
    });
    
    if (timer) clearInterval(timer);
    if (quizMode === 'exam') startTimer();
    
    updateNavigationButtons();
}

function startTimer() {
    timeLeft = 20;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (currentQuestionIndex < currentQuestions.length - 1) {
                nextQuestion();
            } else {
                finishQuiz();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timerDisplay');
    timerElement.textContent = `${timeLeft}s`;
    timerElement.className = 'timer'; // Reset
    if (timeLeft > 10) timerElement.classList.add('normal');
    else if (timeLeft > 5) timerElement.classList.add('warning');
}

function selectOption(selectedElement, option) {
    if (isAnswerRevealed && quizMode === 'training') return;
    
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    selectedElement.classList.add('selected');
    userAnswers[currentQuestionIndex] = option;
    
    if (quizMode === 'training') {
        showAnswerFeedback();
    }
    if (quizMode === 'exam') {
        clearInterval(timer);
    }
}

function showAnswerFeedback() {
    isAnswerRevealed = true;
    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    document.querySelectorAll('.option').forEach(optionEl => {
        optionEl.style.pointerEvents = 'none';
        if (optionEl.textContent === question.answer) {
            optionEl.classList.add('correct');
            optionEl.innerHTML += ' <span class="feedback-icon">✓</span>';
        } else if (optionEl.textContent === userAnswer) {
            optionEl.classList.add('incorrect');
            optionEl.innerHTML += ' <span class="feedback-icon">✗</span>';
        }
    });
    
    const explanationElement = document.getElementById('answerExplanation');
    explanationElement.innerHTML = `<strong>Explication :</strong> ${question.explanation}`;
    explanationElement.classList.remove('hidden');
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
    document.getElementById('nextBtn').classList.toggle('hidden', isLastQuestion);
    document.getElementById('finishBtn').classList.toggle('hidden', !isLastQuestion);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function finishQuiz() {
    if (timer) clearInterval(timer);
    
    score = 0;
    wrongAnswers = [];
    const themeErrors = {};
    
    currentQuestions.forEach((question, i) => {
        if (userAnswers[i] === question.answer) {
            score++;
        } else {
            wrongAnswers.push({ ...question, userAnswer: userAnswers[i] || "Pas de réponse" });
            themeErrors[question.theme] = (themeErrors[question.theme] || 0) + 1;
        }
    });
    
    showResults(themeErrors);
}

function showResults(themeErrors) {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
    
    document.getElementById('finalUserDisplay').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    document.getElementById('finalRoleDisplay').textContent = ` - ${getRoleDisplayName(currentUser.role)}`;
    document.getElementById('finalLevelDisplay').textContent = ` - Niveau ${currentUser.level}`;
    document.getElementById('finalModeDisplay').textContent = ` - Mode ${quizMode === 'training' ? 'Entraînement' : 'Examen'}`;
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('scoreCircle').style.setProperty('--score', percentage);
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    document.getElementById('scoreText').textContent = `${score}/${currentQuestions.length}`;
    
    let feedback = '';
    if (percentage >= 90) feedback = '🏆 Excellent ! Vous maîtrisez parfaitement les règles !';
    else if (percentage >= 70) feedback = '👍 Très bien ! Continuez comme ça !';
    else if (percentage >= 50) feedback = '🙂 Pas mal ! Il y a encore quelques points à revoir.';
    else feedback = '📚 Continuez à étudier les règles, vous allez progresser !';
    document.getElementById('feedback').textContent = feedback;
    
    const weaknessList = document.getElementById('weaknessList');
    weaknessList.innerHTML = '';
    if (Object.keys(themeErrors).length > 0) {
        Object.entries(themeErrors).forEach(([theme, errorCount]) => {
            weaknessList.innerHTML += `<div class="weakness-item"><strong>${theme}</strong> : ${errorCount} erreur${errorCount > 1 ? 's' : ''}</div>`;
        });
        document.getElementById('weaknessAnalysis').classList.remove('hidden');
    } else {
         document.getElementById('weaknessAnalysis').classList.add('hidden');
    }
    
    const correctionList = document.getElementById('correctionList');
    correctionList.innerHTML = '';
    if (wrongAnswers.length > 0) {
        wrongAnswers.forEach(error => {
            correctionList.innerHTML += `
                <div class="correction-item wrong">
                    <h4>${error.question}</h4>
                    <p><strong>Votre réponse :</strong> <span class="user-answer">${error.userAnswer}</span></p>
                    <p><strong>Bonne réponse :</strong> <span class="correct-answer">${error.answer}</span></p>
                    <p><strong>Explication :</strong> ${error.explanation}</p>
                </div>`;
        });
        document.getElementById('correctionDetails').classList.remove('hidden');
    } else {
        document.getElementById('correctionDetails').classList.add('hidden');
    }
}

function newTest() {
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('quizMode').value = '';
}

function restartQuiz() {
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('loginForm').reset();
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
}