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
  score++;
  updateScoreText(score);
}

// View
function updateScoreText(newText) {
  firstText.innerHTML = newText;
}

function updateStatusText(newText) {
  secondText.innerHTML = newText;
}

