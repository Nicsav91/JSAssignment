// Document Elements
// Looks for "text0". Assign that to the variable called textField0.
const textField0 = document.getElementById('text0');

// Buttons
const increaseScoreButton = document.getElementById('button0');

// Internal Variables,
let score = 0;

// Process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener('click', () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
})

// Controllers, kalkylerar
function increaseScoreByOne() {
  score++;
}

function checkScoreForSeven () {
 if (score >= 7) {
   changeScoreTextColorToGreen();
 }
}

// View
function updateScoreText() {
  textField0.innerHTML = "Your score is: " + score;
}

function changeScoreTextColorToGreen() {
  textField0.style.color = "green";
}
