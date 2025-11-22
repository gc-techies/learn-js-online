const first = [1, 2, 3];
const second = ['a', 'b', 'c'];

const objArrOne = [
    {id: 1, name: 'Segun'},
    {id: 2, name: 'Muheez'},
    {id: 3, name: 'GCT'},
]

const objArrTwo = [
    {id: 4, name: 'Tel'},
    {id: 5, name: 'Obansanjo'},
    {id: 6, name: 'IBB'},
]

const objArrThree = objArrOne.concat(objArrTwo);
objArrThree[1].name = 'Dell';

// explaining REST operator
function sample(z, a){
    console.log(z, a);
}

function restFunction(...params){
    // ... called rest operator here
    console.log(typeof params, params);
}

// first approach
const third = first.concat(second);

const fourth = third.slice(1, 4);
const fifth = third.slice();

console.log(first, second, third, fourth, fifth);

sample(null, 'hello');
restFunction('a', 1);
// second approach: recommended
const spread = [...first, 'w', 8, ...second];
const objArrSpread = [...objArrOne, ...objArrTwo];

// Iterating arrays using forEach loop
spread.forEach(function (element, index) {
    // console.log(element, index);
});

// spread.forEach((element, index) => console.log(element, index));

// Joining the elements of an array
const joined = spread.join(',');
console.log(joined);

const txt = 'i love teaching students';
const subStr = txt.split(' ');
const joinedSubStr = subStr.join('+');
console.log(joinedSubStr);