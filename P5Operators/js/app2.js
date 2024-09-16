let speedInput = 72;
let speedOutput = 0;
speedOutput = speedInput /3.6;
console.log(speedOutput);

let minutesInput = 3;
let secondsOutput = 0;
secondsOutput = minutesInput * 60;
console.log(secondsOutput);

let numberOne = 11;
let numberTwo = 4;
result = numberOne / numberTwo;
console.log(result);

reminder = numberOne % numberTwo;
console.log(reminder);

let radius = 2;
// area = 3.141*2*2; // Googled how to use pi and got the calculation. Got the same results anyhow
area = Math.PI * 2 *2;
console.log(area);

// negation = numberOne - 22;
// console.log(negation); // Reconized this is right, but still wrong.

let negationNumber = 11;
let negatedOutput;
negatedOutput = negationNumber * - 1;
console.log(negatedOutput);


let weight = 70;
let height = 1.82;
// output = weight / (height * height); How I solved it
bmi = weight / Math.pow(height, 2);
console.log(bmi);

let sideA = 3;
let sideB = 4;
let hypotenuse;

let squareOfAAndB = Math.pow(sideA, 2) + Math.pow(sideB, 2);
hypotenuse = Math.sqrt(squareOfAAndB);
console.log(hypotenuse);

let secondsInput = 111;
let minSecOutput;

let minOutput;
minOutput = Math.floor(secondsInput / 60);
console.log(minOutput);

let secOutput;
secOutput = secondsInput - minOutput + 60;
console.log(secOutput);
minSecOutput = minOutput + "minute(s) and" + secOutput + "second(s)";
console.log(minSecOutput);



