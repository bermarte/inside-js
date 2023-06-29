// #todo

'use strict';

console.log('-- begin --');

// there may be more than one correct answer
//  try finding as many as you can
//  what do all the solutions have in common?
// or maybe the asserted path is unreachable!

let value1 = true;
let value2 = 1;
let path = '';

if (value1 === value2) {
  path = 'if';
} else if (typeof value1 === typeof value2) {
  path = 'else if 1';
} else if (Number(value1) === Number(value2)) {
  path = 'else if 2';
}

console.assert(path === 'else if 2');

console.log('-- end --');

value1 = '12';
value2 = [1,2,3,4,4,3,2,1,5,4,3,2].length;
path = '';

if (value1 === value2) {
  path = 'if';
} else if (typeof value1 === typeof value2) {
  path = 'else if 1';
} else if (Number(value1) === Number(value2)) {
  path = 'else if 2';
}

console.assert(path === 'else if 2');

console.log('-- end --');

value1 = '2';
value2 = [,,].length;
path = '';

if (value1 === value2) {
  path = 'if';
} else if (typeof value1 === typeof value2) {
  path = 'else if 1';
} else if (Number(value1) === Number(value2)) {
  path = 'else if 2';
}

console.assert(path === 'else if 2');

console.log('-- end --');
