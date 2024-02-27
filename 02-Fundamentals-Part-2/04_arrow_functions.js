/* eslint-disable max-len */

// Example 1

const calAge3 = (birthYear) => 2024 - birthYear;
const age3 = calAge3(1989);
console.log('This is the example 1 result: ' + age3);

// Example 2

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log('This is the example 2 result: ' + yearsUntilRetirement(1989));

// Example 3
const yearsUntilRetirementJob = (birthYearJob, firstName) => {
  const ageJob = 2037 - birthYearJob;
  const retirement = 65 - ageJob;
  return `${firstName} retires in ${retirement} years`;
};

console.log('This is the example 3 result: ' + yearsUntilRetirementJob(1989, 'Job'));
console.log('This is the example 3 result: ' + yearsUntilRetirementJob(1984, 'Gerber'));
