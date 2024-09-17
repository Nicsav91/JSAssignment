// let inputNumberOne = 0;

function multiplyBySelf(numberToMultiply) {
return numberToMultiply * numberToMultiply;
}

console.log(multiplyBySelf(4));

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(add(5, 20));

function averageNumber(firstNumber, secondNumber) {
  // let sumOfNumbers = firstNumber + secondNumber;
  // return sumOfNumbers / 2; För att bryta ner uträkningen, kan bli mer läsbart.
  return (firstNumber + secondNumber) / 2;
}
console.log(averageNumber(2, 6));

function welcomingResult(firstString, secondString) {
  // let greeting = "Welcome " + firstString + " " + secondString Den kommer klaga men man kan göra så också.
  return "Welcome" + firstString + secondString;
  // return "Welcome " + firstString + " " + secondString; How Ben did it
}
console.log(welcomingResult(" Ben", " Ting!"));

function randomNumber() {
  // return Math.floor(Math.random() * 3);
  return Math.floor(Math.random() * Math.floor(4));
}
console.log(randomNumber());

function numberToString(firstNumber) {
if (firstNumber === 0){
  return "A";
}
if (firstNumber === 1){
  return "B";
}
if (firstNumber === 2){
  return "C";
}
}
console.log(numberToString(2));

let score = 0;

function equalNumbers(firstNumber, secondNumber) {
  if (firstNumber === secondNumber){
    return "Both numbers are equal!";
  }
  if (firstNumber > secondNumber){
    score++
    return "First number is greater!";
  }
  if (firstNumber < secondNumber){
    score--
    return "Second number is greater!";
  }
}
console.log(equalNumbers(6, 4));
