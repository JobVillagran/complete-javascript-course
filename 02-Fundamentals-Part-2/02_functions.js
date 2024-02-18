/* eslint-disable require-jsdoc */

function logger() {
  console.log('My name is Job');
}


// Calling, running or invoking the function
logger();
logger();
logger();

// EXAMPLE NUMBER 1

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// Running #1

fruitProcessor(5, 0);

// Using another variable to retreive the store value for Running #1

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// Another option is, to console log directly the function

console.log(fruitProcessor(5, 0));


// EXAMPLE NUMBER 2 with dependency of the first example

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
