/* eslint-disable max-len */
// Push = adds elements into the end of the array

// Push = Add elements to the end of the array

const friends = ['Mike', 'Job', 'Jordan'];
const newLenght = friends.push('Rakata', 'Wazauiski');
console.log(friends);
console.log(newLenght);

// Unshift = Adds elements in the beginning of the array

friends.unshift('Larry');
console.log(friends);
console.log(newLenght);

// Pop = Removes elements from the end of the array

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log('the element that was removed from the array was: ' + popped);

// shift = Removes elements in the beginning of the array

friends.shift();
console.log(friends);

// indexOf: Locate an element in the array. Returns the position.

console.log(friends.indexOf('Jordan'));
console.log(friends.indexOf('Maria')); // We picked a wrong element purposely and you'll get -1 if that happens.

// includes: Locate an element in the array. Returns a boolean.

console.log(friends.includes('Jordan'));
console.log(friends.includes('Maria')); // We picked a wrong element purposely and you'll get false if that happens.

// includes using int

console.log(friends.push(23));
console.log(friends.includes('Jordan'));
console.log(friends.includes('Jordan'));
console.log(friends.includes(23));
console.log(friends.includes('23')); // Is not going to find it cuz there's no type coercion.

// includes using conditionals

if (friends.includes('Maria')) {
  console.log('You have a friend called Job');
} else {
  console.log('It seems there is no friend called like that');
}
