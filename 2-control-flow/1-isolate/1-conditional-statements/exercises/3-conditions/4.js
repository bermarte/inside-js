// #todo

'use strict';

console.log('-- begin --');

// write a condition to take the correct path
//  use value1, value2 & value3 in your expressions
// there will be more than one right answer
//  try to find as many as you can
//  what do these solutions have in common?

let value1 = '200';
let value2 = 200;
let value3 = false;
let path = '';

if (Number(value1 + value2) === !value3) {
  path = 'if';
} else if (value3) {
  path = 'else if 1';
} else if (Number(value1) - value2 >= Number(value3)) {
  path = 'else if 2';
} else {
  path = 'else';
}

console.assert(path === 'else if 2', 'path should be "else if 2"');

console.log('-- end --');

value1 = '200';
value2 = 200;
value3 = false;
path = '';

if ((Number(value1) -1) && !value2 ) {
  path = 'if';
} else if (String(value2) !== value1) {
  path = 'else if 1';
} else if ((typeof (Boolean(path)) || !value3 || !value2) === 'boolean') {
  path = 'else if 2';
} else {
  path = 'else';
}

console.assert(path === 'else if 2', 'path should be "else if 2"');

console.log('-- end --');

// in all the cases the else is never executed, the same for the first if and the first else-if
