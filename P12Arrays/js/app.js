// Create an array with the index of 11
const occurrences = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Create a loop that rolls 10k times
for (let i =0; i < 10000; i++) {
  let randomNumber = Math.floor(Math.random() * 11);
  occurrences[randomNumber]++; // Count how many times a number gets random selected
}

// Print the result in the console
for (let j = 0; j < occurrences.length; j++) {
  console.log("Number " + j + " occurred " + occurrences[j] + " times");
}
