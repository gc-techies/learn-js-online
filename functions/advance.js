// var firstName = 'testing';
const player = {
    firstName: 'Bora',
    lastName: 'Worldwide',
    height: 5,

    scores: [4, 6, 2, 8],

    showScores() {
        this.scores.forEach(function (score) {
            console.log(score, this.firstName);
        }, this);
    },

    showScoreArrowFunction() {
        this.scores.forEach((score) => {
            console.log(score, this.firstName);
        });
    },

    // functions in objects are called methods
    get fullName() {
        return this.firstName + ' ' + this.lastName
    },

    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error('A String/Text is expected');
        }
        const split = value.split(' ');
        if(split.length < 2){
            throw new Error('Include first name and last name');
        }
        console.log(this);
        this.firstName = split[0];
        this.lastName = split[1];
    },

    getFirstName() {
        return this.firstName;
    },

    setFirstName(value){
        this.firstName = value;
    },

    // Accessor methods
    // getter
    // get firstName(){
    //     return this.firstName;
    // },

    // setter
    // set firstName(value){
    //     this.firstName = value;
    // }
}

player.showScoreArrowFunction();

// const fullName = player.firstName + ' ' + player.lastName

// player.setFirstName('Muiz');

// Error/Exception handling
try {
    player.fullName = '!! anonymous';
    // console.log(player.fullName);
    const test = 'test';
} catch (error) {
    alert(error);
}

// global variable
let gloval = 'testing';

function test() {
    let gloval = 'temp';
    // local variable
    const variable = ' ';
    console.log(this);
    if(true){
        // console.log(gloval, 'in nested code block');
    }
}

function Person(age) {
    this.age = age;
}

const p = new Person('Bayo');

// console.log(gloval);

test();

// memory leaks
for (var index = 0; index < 5; index++) {
    if(true){
        var one = 1;
    }
    // console.log(index, one);
}

var temp = 'Temp';

// console.log(index, 'last value');