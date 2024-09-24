 // const firstText = document.getElementById("firstText");
// firstText.innerHTML = "Nicolinas Page";
 // firstText.style.color = "Green";

// const firstButton = document.getElementById("firstButton");

// const firstButton = document.querySelector("#firstButton");
// firstButton.innerHTML = "Click me!";
// firstButton.style.color = "pink";

// firstButton.addEventListener('click', () => {
//  console.log('button clicked!');
 // });

// Internal Variables
// const increaseScoreButton = document.getElementById("increaseScore");

// let score = 0;

// increaseScoreButton.addEventListener("click", () => {
//  increaseScoreByOne();
// })

// const secondText = document.getElementById("secondText");


// Process (what is going to happen in what sequence?)



// Controllers
// function increaseScoreByOne () {
 // score++;
 // updateScoreText(score);
//}

// View
//function updateScoreText(newText) {
 // firstText.innerHTML = newText;
//}

// function updateStatusText(newText) {
//  secondText.innerHTML = newText;
// }

 // ROLL A DICE BREAK DOWN ---------------------------

 // VARIABLES


 // BUTTONS
 let button0 = document.getElementById("button0");


// TEXTS
let playerRollText = document.getElementById("playerRollText");

// DATA
let playerRoll = 0;


 // PROCESSES push the button
 button0.addEventListener("click", function() {
  getRandomIntForPlayer();
  showPlayerRollResult();
 })

 // CONTROLLERS functions. +1 för att få bort nollan
 function getRandomIntForPlayer() {
   playerRoll = Math.floor(Math.random() * 6) + 1;
 }

 // VIEWS
function showPlayerRollResult() {
   playerRollText.innerHTML = playerRoll
}
