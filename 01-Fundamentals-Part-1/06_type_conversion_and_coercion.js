// type conversion

const inputYear = '1989';
console.log(inputYear + 18);

console.log(typeof(Number(inputYear)), typeof(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof(NaN));
console.log(String(2024));
console.log(typeof(String(2024)));
console.log(String(2024) + ' ' + (2000 + 24));

// type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

// guess the output game

let n = '1' + 1;
n = n - 1;
console.log(n + ' ' + typeof(n));

let m = 2 + 3 + 4;
m = m + '5';
console.log(m + ' ' + typeof(m));

const x = '10' - '4' - '3' - 2 + '5';
console.log(x + ' ' + typeof(x));
