const age = '18';
if (age === 18) console.log('You just became and adult :D (strict)');

if (age == 18) console.log('You just became and adult :D (loose)');

// example

const favourite = prompt('What\'s your favorite number?');
console.log(favourite);
console.log(favourite + ' ' + typeof(favourite));

if (favourite == 23) {
  console.log('Cool! 23 is an amazing number!');
} else {
  console.log(`The number ${favourite} is not the right one!`);
}


const favouriteTwo = Number(prompt('What\'s your favorite number?'));
console.log(favouriteTwo);
console.log(favouriteTwo + ' ' + typeof(favouriteTwo));

if (favouriteTwo === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favouriteTwo === 7) {
  console.log('Cool! 7 is an awesome number');
} else if (favouriteTwo === 9) {
  console.log('Cool! 9 is an awesome number');
} else {
  console.log(`The number ${favouriteTwo} is not 23, 7 or 9.`);
}

if (favouriteTwo !== 23) console.log('Why not 23?');
