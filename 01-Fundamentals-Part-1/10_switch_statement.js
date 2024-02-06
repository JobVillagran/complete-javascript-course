// const day = prompt('type the day of the week: monday, tuesday, etc.');
const day = 'monday';

console.log('Using switch/break: ');

switch (day) {
  case 'monday':
    console.log('    Plan course Structure');
    console.log('    Go to coding meeting');
    break;
  case 'tuesday':
    console.log('    Prepare theroy videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('    Write code examples');
  case 'friday':
    console.log('    Record videos');
  case 'saturday':
  case 'sunday':
    console.log('    Enjoy the weekend :D');
    break;
  default:
    console.log('    Not a valid day');
}

console.log('Using else if statements: ');

if (day == 'monday') {
  console.log('    Plan course Structure');
  console.log('    Go to coding meeting');
} else if (day === 'tuesday') {
  console.log('    Prepare theroy videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('    Write code examples');
} else if (day === 'friday') {
  console.log('    Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('    Enjoy the weekend :D');
}
