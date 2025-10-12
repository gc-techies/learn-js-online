// Factory Functions
function createCar(name, color, model) {
    return {
        name,
        color,
        model
    }
}

let benz = createCar("benz", 'black', 'glk');
let toyota = createCar('toyota', 'white', 'camry');

// DYNAMIC NATURE OF OBJECTS
let obj = {
    temp: 'i do not know'
}
obj.id = 2;
obj.name = 'bora';
delete obj.temp;

/*  Constructor Function
    They rely on the dynamic nature of objects
*/
function Car(name, color, model) {
    this.name = name;
    this.color = color;
    this.model = model;
}

let hyundai = new Car('Hyundai', 'yellow', 'Sonata');
let honda = new Car('Honda', 'purple', 'Cross Tour')
/*  the new keyword performs three functions
    1.  Creates an empty object
    2.  Points this to that empty object
    3.  return the object
*/

function increment(a){
    a += 4;
    console.log('after incrementing in func', a);
}
// primitive types exhibit PASS BY VALUE
let x = 5;
let y = x;

x += 7;

increment(y);

console.log('value of x', x);
console.log('value of y', y);

let objOne = {
    amount: 10
}

let objTwo = objOne;

objOne.amount = 15;