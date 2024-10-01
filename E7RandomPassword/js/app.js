// E7 Random_password
// Design a program that generates a random password with 6 characters, digits or symbols.

// Create an array with characters,
const possibleCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "x", "y", "z", "#", "%", "&", "!"];
console.log(possibleCharacters.length); // 38 st

// Function to get randoms from the array
function getRandomInt() {
  return Math.floor(Math.random() * possibleCharacters.length); // ifall vi fyller på arrayern i efterhand.
}
// console.log(getRandomInt());

console.log();

// Create a loop to fil the 6 index
for (let i = 0; i < 6; i++) { // 6 för att vårt index har 6 st platser
  let randomArrayIndex = getRandomInt();
  console.log(randomArrayIndex);
  console.log(possibleCharacters[randomArrayIndex]);

}

console.log();

possibleCharacters.length;
possibleCharacters[1];
console.log(possibleCharacters.indexOf("a")); // för att hitta indexnumret av värdet




