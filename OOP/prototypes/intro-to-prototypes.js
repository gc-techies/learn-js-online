function Referee(name) {
    // instance properties/members
    this.name = name;
    // Method 1 for getter
    this.getYellowList = function () {
        return 'referee yellow list';
    }
}

// prototype members/properties/methods
Referee.prototype.assignCard = function () {
    console.log('referee assigning card', this.getYellowList());
}

let referee1 = new Referee('referee1');
let referee2 = new Referee('referee2');

// object literal syntax
let ref = {
    name: 'referee1',
    age: 45,
    gender: 'M',
}

// let ref = new Object();

Object.defineProperty(ref, 'age', {
    configurable: false,
    enumerable: true,
    writable: false,
});

// delete ref.age;
ref.age = 50;

// Method 1: for...in loop
for (let prop in ref) {
    // console.log(prop);
}

// Method 2: Using Object.keys()
let props = Object.keys(ref);
// console.log(props);

// get reference to the prototype object of ref
let proto = Object.getPrototypeOf(ref);
const descriptor = Object.getOwnPropertyDescriptor(proto, 'toString');
// console.log(descriptor);
// console.log(proto);