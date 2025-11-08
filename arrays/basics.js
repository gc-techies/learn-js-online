// array literal syntax
let arr = [];
arr[0] = 1;
arr[1] = 2;

const array = [];
array[0] = 'a';
array[1] = 'b';

let a = [];
a[0] = 1;

// reassign a to another array (empty or not)
a = [];
console.log(a);

const b = ['a', 'b', 1, 3, 5];

// Add elements to arrays
// 1. Add elements to the begining of an array
b.unshift('z', 'y', 'x');

// 2. Add elements to the middle of an array
let x = b.splice(2, 0, 'w', 'w', 'e');

// 3. Add elements to the end of an array
b.push(78, 54, 1, 'a', 'y', 5);

// 4. Add elements manually to any index position
b[14] = 6;

console.log(b);