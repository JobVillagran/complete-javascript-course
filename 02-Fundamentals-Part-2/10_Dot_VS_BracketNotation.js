/* eslint-disable max-len */

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);

// dot notation
console.log(jonas.lastName);
console.log(jonas.firstName);

// bracket notation
console.log(jonas['age']);
console.log(jonas['age']);

// bracket notation combining properties
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Anoter example with bracket notation

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

/* In other words:
Dot notation = Access to the properties of the object only.
Brackets notation = Access to the properties when they are more
dynamic or they contain special characters.
*/

// Another example with bracket notation and if/else

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('No data available');
}

// Adding more properties to the object

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// MiniChallenge
// "Jonas has 3 friends, and his best friend is called Michael"

// My Way
const bestFriend = jonas.friends[0];
console.log(`Jonas has 3 friends, and his best friend is called ${bestFriend}`);

// Right way
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
