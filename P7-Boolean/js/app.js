// Goal:
// Output:You are a child: False
// Output:You are a teenager: False
// Output:You are an adult: True
//
// Instructions:
// Create new HTML Project named P7Boolean
// Open the app.js file.
// Start with a variable
// const birthYear = 2000;
//
// Do a few age-checks:
// Save to a letvariable named isChild, when the age is from 0 till 10.
// Save to a letvariable named isTeenager, when the age is from 11 to 17
// Save to a letvariable named isAdult, when the age is 18 or more.
// Then, print them all to the console.
// Try with different birth years and account for edge cases (if birthYear is 2030?)

const birthYear = 2000;
const currentYear = 2014;
let agedOfPerson = currentYear - birthYear;

// Save to a letvariable named isChild, when the age is from 0 till 10.
// 10 or lower.
let isChild = agedOfPerson <= 10;

// Save to a letvariable named isTeenager, when the age is from 11 to 17
// after 2005. after 2013. <= 11 and above. <= 17 and below.
let isTeenager = (agedOfPerson >=11) && (agedOfPerson <= 17);

// Save to a letvariable named isAdult, when the age is 18 or more.
// before or on 2005. 18 and more.
let isAdult = agedOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);
