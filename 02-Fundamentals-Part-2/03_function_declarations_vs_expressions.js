/* eslint-disable require-jsdoc */

// Function Declarations

/**
What: Declaring a function using the
function keyword.
When: Can be called both BEFORE and
AFTER the declaration in the code.
 */

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

calcAge1(1991);

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression

/*
What: Assigning a function to a
variable.
When: Must be declared before it
is called. Cannot be hoisted.
*/

const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1989);
console.log(age2);

console.log(age1, age2);

