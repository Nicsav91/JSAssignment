// for (let i = 0; i < 5 ; i++) {
 // console.log(i);
// }

// for (let u = 1; u < 6; u++) {
  // console.log(u * Math.floor(Math.random() * 3));
// }

// for (let h = 1; h <= 2024; h**) {
//   console.log(h * Math.pow(1, 2024));
// }

//SYNTAX for FOR LOOP
// for (initialization; condition; updateExpression) {
// for loop body
// }

// for ( let i = 1: i < 5; i=1+1); { // i = value 1, i är mindre än 5, i blir = 2 och ökar tills condition är false
// console.log(i);
// }

for (let i = 1; i <= 5; i++) { // i = 1, i är mindre eller lika med 5, i ökar med ett varje gång.
  console.log("Created a loop that runs 5 times");

  console.log(i);
}

console.log(); // för radbryt i terminalen

// Positive for Loop
for (let a = 0; a < 5; a++) { // a = 0, a är mindre än 5, a ökar med ett varje gång
  console.log(a); // 0 1 2 3 4.
}

console.log("radbryt");

for (let b = 0; b <= 5; b++) {
  console.log(b); // 0 1 2 3 4 5
}

console.log("radbryt");

// Loop som ökar med 2 varje gång
for (let c = 0; c <= 6; c+=2) {
  console.log(c); // 0 2 4 6
}

console.log();

// Negative for Loop
for (let d = 5; d > 0; d--) {
  console.log(d); // 5 4 3 2 1
}

console.log();

for (let e = 5; e >= 0; e--) {
  console.log(e); // 5 4 3 2 1 0
}

console.log();
// Loop som minskar med 2 varje gång
for (let f = 5; f >= 0; f-=2) {
  console.log(f); // 5 3 1
}

console.log();

// Print 13 different random numbers between 1 and 6
for (let g = 0; g < 13; g++) {
 let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
}
console.log();

// Start at 1, multiply the number of each iteration by 2 and stop after 1024. Print each number to the console
for (let h = 1; h <= 1024; h*=2) {
  console.log(h); // 1 2 4 8 16 32 64 128 256 512 1024
}
console.log();

// Start at 10 and count down until 0. Print each number to the Console
for (let j = 10; j >= 0; j--) {
  console.log(j); // 10 9 8 7 6 5 4 3 2 1 0
}
console.log();

// Write a function that has 2 number as parameters and returns the first number to the power of the second number
function powerUpNumber() {
return Math.pow(4, 24);
}
console.log(powerUpNumber()); // Output: 281474976710656

console.log();

function powerUpNoReturn () {
  console.log(Math.pow(4, 24)); // Output: 281474976710656
}
powerUpNoReturn ();
console.log();


// Loop Stretch Exercise, same verse but use a for loop to decrease the number of bottles from 99 to 0.
let numberOfBottles = 10;
const line1 = " green bottles hanging on the wall,";
const line2 = " and if one green bottle, should accidently fall, there will be";
let line3 = "There`ll be no more green bottles hanging on the wall!";


for (let numberOfBottles = 10; numberOfBottles >= 0; numberOfBottles--) {
  console.log(numberOfBottles + line1 + line2);
}

let numberOfbottles; // recon this is not the exercise, but i wanted to add it
 if (numberOfBottles === 0);
   console.log(line3);

