/** **** Primite Data types ******/

// eslint-disable-next-line max-len
// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// Number
const age = 23;

// String
const secondName = 'Emanuel';

// Boolean
const fullAge = true;

// Undefined
let children;

// Null

// Symbol


// BigInt


// Examples

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun + ' ' + 'javascriptIsFun');
console.log(typeof 23);
console.log(typeof 'Job');

// Le cambiamos a la variable su contenido. Con Let asignamos y
// sin Let asignamos un nuevo valor.
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun + ' ' + 'javascriptIsFun');

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(year);
console.log(typeof year);

// This examples is a bug but from JS cuz is not recognizing properly
// the data type.
console.log(typeof null);