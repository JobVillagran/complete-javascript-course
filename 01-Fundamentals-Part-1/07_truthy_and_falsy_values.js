// 5 falsy values: 0, '', undefined, null, NaN

// Explicitd conversion

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean('Jonas'));

// Implicit conversion

const money = 100;
if (money) {
  console.log('You need to take care of it! ;)');
} else {
  console.log('You dont have any money');
}

let height;
// let height = 10;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
