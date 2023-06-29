'use strict';

console.log('-- begin --');

// experiment with different values
const a = '';
const b = 2;

// "and" expression
const andValue = a && b;

// conditional statement
let conditionalValue;
if (Boolean(a) === false) {
  conditionalValue = a;
} else {
  conditionalValue = b;
}

console.assert(andValue === conditionalValue, 'always the same!');
console.log('-- end --');
