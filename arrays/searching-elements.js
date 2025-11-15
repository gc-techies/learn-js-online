const b = ['a', 'b', 'y', 1, 4, 6, 'y', 'z', 'w', 1];
console.log(b.indexOf('y'), 'starting from index 0');
console.log(b.lastIndexOf('y'), 'starting from end');

let idx = b.indexOf('y');
if(idx > -1){
    console.log(b[idx]);
}else {
    console.log('item not found');
}
console.log(b.includes('aa'), 'item located');

const objArr = [
    {
        id: 1,
        name: 'Bora'
    },
    {
        id: 2,
        name: 'Segun'
    },
    {
        id: 3,
        name: 'Muheez'
    },
];

// callback functions
const found = objArr.find(function (obj) {
    console.log(obj, 'instance');
    return obj.id === 2 && obj.name === 'SEgun';
});

// Arrow Function
const anotherFind = objArr.find((obj) => obj.id === 2 && obj.name === 'Segun')
console.log(anotherFind, 'found');