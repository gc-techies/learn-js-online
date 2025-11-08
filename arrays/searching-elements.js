const b = ['a', 'b', 'y', 1, 4, 6, 'y', 'z', 'w', 1];
console.log(b.indexOf('y'), 'starting from index 0');
console.log(b.lastIndexOf('y'), 'starting from end');

let idx = b.indexOf('y');
if(idx > -1){
    console.log(b[idx]);
}else {
    console.log('item not found');
}

console.log(b.includes('aa'));