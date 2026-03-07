function another() {
    console.log('greetings from another');
}
// function declaration
function greet() {
    console.log('hello');
}
greet();
another();
// Named function expression
const segunGreet = function segun() {
    console.log('greetings from segun function expression');
}

// Anonymous function expression
const anonymous = function() {
    console.log('greetings from anonymous function expression');
}

let anonymouseTwo = anonymous;
anonymouseTwo();

// function call
// greet();
anonymous();
segunGreet();

// expression
const a = 'food';
const b = a;

console.log('value of b', b);


// primitive and reference
// primitive => string, number, boolean, symbol, null, undefined
// reference => object, array, function

// HOISTING