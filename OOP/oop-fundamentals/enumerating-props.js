let person = {
    // properties and methods here
    speed: 8,
    height: 5,

    run: function () {
        console.log('player running');
    },

    participate: function () {
        console.log('parent participating');
    },
}

// Method 1: for...in loop
for (let prop in person) {
    if(typeof person[prop] !== 'function') {
        // console.log(prop, person[prop]);
    }
}

// Method 2: Using Object.keys()
let props = Object.keys(person);
for (const element of props) {
    console.log(element, person[element]);
}
// console.log('props using Object.keys', props);

// To know if a property exists in an object, we can use the in operator
// console.log('car' in person);
if('speed' in person) {
    console.log('player has speed', person.speed);
}

