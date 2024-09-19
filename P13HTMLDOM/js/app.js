// Reference "text0" and assign it to the variable called "textField0"
const textField0 = document.getElementById("text0");

textField0.innerHTML = "Welcome";

// Ändrar färgen på Nicolina till rosa
textField0.style.color = "pink";

const textField1 = document.getElementById("text1");
textField1.innerHTML = "holaa";


// const button0 = document.createElement("button0");


// function multiplyBySelf(numberToMultiply) {
 // return numberToMultiply * numberToMultiply;
// }

//function averageNumber(firstNumber, secondNumber) {
  // let sumOfNumbers = firstNumber + secondNumber;
  // return sumOfNumbers / 2; För att bryta ner uträkningen, kan bli mer läsbart.
  // return (firstNumber + secondNumber) / 2;
// }

let score
function increaseBy(inputNumber) {
  return score += inputNumber;
}

const textField2 = document.getElementById("text");

function updateScore() {
  textField2.innerHTML = score;
}

const button1 = document.getElementbyId("button");
button1.addEventListener("click", increaseBy);

updateScore.addEventListener("click", updateScore);
