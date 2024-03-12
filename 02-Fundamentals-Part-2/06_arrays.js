/* eslint-disable require-jsdoc */
/* eslint-disable no-array-constructor */
/* eslint-disable max-len */

// Using Variables

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Using Arrays

const friends = ['Michael', 'Steven', 'Peter', 'Job', 'Mike', 'Jordan'];

console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length); // Elements inside of the array
console.log(friends[friends.length - 1]); // Get the last element in the array

// Replace value in the array
friends[4] = 'Jay';
console.log(friends);

// Using also different data types in the array

const yearNew = new Array(2000, 1990, 1989);
console.log(yearNew);

// Holding different values in the array

const firstname = 'Job';
const jonas = [firstname, 'Villagran', 2024 - 1989, 'Software Engineer', friends];
console.log(jonas);

// Using functions in the array

function calcAge(birthYear) {
  return 2024 - birthYear;
}

const years = [1989, 1978, 2018, 1963];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

// Function calls in the array

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);
