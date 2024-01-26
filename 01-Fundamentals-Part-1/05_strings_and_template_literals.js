/* eslint-disable max-len */
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// eslint-disable-next-line max-len
const jonas = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(jonasNew);
console.log(`Just a regular string :)`);

// eslint-disable-next-line no-multi-str
console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 16;
const driver = 'Job';
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`${driver} is old enough to Dirve 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`${driver} is NOT old enough to Dirve, ${driver} needs to wait ${yearsLeft} years.`);
};


const birthYearPerson = 1989;
let century;

if (birthYearPerson <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/*

CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// eslint-disable-next-line arrow-parens
if (BMIMark => BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
};
