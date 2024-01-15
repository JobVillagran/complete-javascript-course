// let js = "boring";
// if (js === "amazing") alert("JavaScriot is FUN!");

// console.log(40 + 8 + 23 - 10);

/****** Values and Variables ******/

/*let fisrtName = "Larry";
let PI = 3.14159;
let myFirstJob = "Grocer";
let myCurrentJob = "Software Engineer";

console.log(fisrtName);
console.log(fisrtName);
çç
console.log(PI);


console.log(myFirstJob, myCurrentJob);*/



/****** Primite Data types ******/

// JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

//Number
// let age = 23;

// //String
// let secondName = "Emanuel";

// //Boolean
// let fullAge = true;

// //Undefined
// let children;

//Null

//Symbol


//BigInt



//Examples

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun + " " + "javascriptIsFun");
// console.log(typeof 23);
// console.log(typeof 'Job');

// Le cambiamos a la variable su contenido. Con Let asignamos y
// sin Let asignamos un nuevo valor. 
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun + " " + "javascriptIsFun");

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1998;
// console.log(year);
// console.log(typeof year);

// This examples is a bug but from JS cuz is not recognizing properly
// the data type.
//console.log(typeof null);



/****** let, const and var ******/

// Declare let when your variables are going to mutate (change),
// and use const when you know the value of the variable.

let age = 31;
//Mutate the variable
age = 21;

const birthday = 1989;
//const errorWillBe;

// var is similar to let, but is an old way to declare before js ES6
var job = 'Programmer';
job = 'Musician';


console.log(age, birthday, job);
