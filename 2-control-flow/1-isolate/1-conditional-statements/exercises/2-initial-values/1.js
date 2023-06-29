// #todo

'use strict';

console.log('-- begin --');

// there may be more than one correct answer
//  try finding as many as you can
//  what do all the solutions have in common?
// or maybe the asserted path is unreachable!

let value1 = false;
let value2 = false;
let path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if';
}

console.assert(path === 'else if');

console.log('-- end --');

value1 = 1 === '1';
value2 = !(Number(1) == Number('1'));
path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if';
}

console.assert(path === 'else if');

console.log('-- end --');

value1 = value1 !== value2;
value2 = !true;
path = '';

if (value1 && !value2) {
  path = 'if';
} else if (!value1 || !value2) {
  path = 'else if';
}

console.assert(path === 'else if');

console.log('-- end --');
