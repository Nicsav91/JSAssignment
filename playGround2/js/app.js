// Looks for "text0". Assign that to the variable called textField0.
const textField0 = document.getElementById('text0');

// Buttons
const increaseScoreButton = document.getElementById('button0');
// Internal Variables
let score = 0;

// Process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener('click', () => {
  increaseScoreByOne();
  updateScoreText();
})

// Controllers
function increaseScoreByOne() {
  score++;
  updateScoreText();
}

// View
function updateScoreText() {
  textField0.innerText = score;
}
