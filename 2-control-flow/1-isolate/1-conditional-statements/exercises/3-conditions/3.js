// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use both value1 & value2 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

let value1 = '';
let value2 = -1;
let path = '';

if (!Number(value1) && !Boolean(value1)) {
  path = 'if';
} else if (value + value2 === 1) {
  path = 'else if';
} else {
  path = 'else';
}

console.assert(path === 'if', 'path should be "if"');

console.log('-- end --');

value1 = '';
value2 = -1;
path = '';

if (!!value1 || value2) {
  path = 'if';
} else if (true) {
  path = 'else if';
} else {
  path = 'else'; //never executed
}

console.assert(path === 'if', 'path should be "if"');

console.log('-- end --');

// Number(value1)- value2

value1 = '';
value2 = -1;
path = '';

if (Number(value1) - value2 > 0) {
  path = 'if';
} else if (false) {
  path = 'else if'; // never executed
} else {
  path = 'else';
}

console.assert(path === 'if', 'path should be "if"');

console.log('-- end --');

// in all the solutions, if the first if is true, the following else-if and else are never executed
