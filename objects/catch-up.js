// Enumerating properties of an object
let muheez = {
    name: "Muheez",
    age: 19,
    height: 5.8
}

for(let p in muheez){
    console.log('name', p, 'value', muheez[p]);
}

if('agee' in muheez){
    console.log('yes, property exists');
}else {
    console.log('no, property does not exist');
}

// Primitive Vs Reference types
// Primitive exhibits Pass By Value mechanism
let a = 4;
let b = a;
a = 5;

console.log('value of b', b);

// Reference exhibits Pass by Reference mechanism
let anotherMuheez = muheez;
muheez.age = 20;
console.log('value of anotherMuheez', anotherMuheez);

function increment(val) {
    val++;
}

function update(obj) {
    obj.age++;
}

let c = 6;
increment(c);
console.log('value of c', c);

let muheezThree = muheez;
update(muheez);
console.log(anotherMuheez);

// inefficient way
let clone = {};
for (const prop in muheez) {
    clone[prop] = muheez[prop];
}

clone.age =  56;

// efficient way using the spread operator (...)
let anotherClone = {...muheez, school: 'Crescent University'};