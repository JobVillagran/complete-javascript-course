/* eslint-disable max-len */
// EXAMPLE OF ARRAY WITH NO OBJECT

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// EXAMPLE OF OBJECT

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

// The order of the properties are alphabetically
console.log(jonas);

/* We use objects to essentially group together different variables that really belong
together such as properties of Jonas that we've been working with.

The difference between Objects and Arrays is thtat objects, is that in Objects the order of these
values does not matter at all when we want to retrieve them. With Arrays, the order in which we specify the elements matters a lot, because that's the way we access them, using their order number.

In other words:

ARRAYS = More ordered data.
OBJECTS = UNSTRUCTURED data.

*/
