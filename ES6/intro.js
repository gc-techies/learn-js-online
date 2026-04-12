// 'use strict';
// Class Declaration
class Referee {
    constructor(id, name) {
        // instance properties/members
        this.id = id;
        this.name = name;
        this.blowWhistle = function() {
            console.log('blow whistle');
        };
    }
    // prototype properties/members
    run() {
        console.log(`${this.name} running as Referee`);
    }
    checkTime() {
        console.log(`${this} running as Referee`);
    }

    static test() {
        console.log('static test');
    }
}

// Class Expression
const Player = class {
    constructor(name) {
        // instance properties/members
        this.name = name;
    }
    run() {
        console.log(`${this.name} running as Player`);
    }
}

// Both class declaration and class expression are not hoisted, so they cannot be used before their declaration. They are also executed in strict mode by default.


function Manager() {
    // call super constructor to initialize instance properties/members of Beings
    this.run = function() {
        this.password = '1234';
        console.log(this);
    }
}


const m = new Manager();
// method call
m.run();

function temp() {
    // this.password = '1234';
    console.log(this);
}

// function call
temp();