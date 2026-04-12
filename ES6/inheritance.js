// Class Declaration
class Being {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // prototype properties/members
    eat() {
        console.log(`${this.name} eating as Being`);
    }
}

class Referee extends Being {
    constructor(id, name) {
        // instance properties/members
        super(id, name);
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
    // Method overriding
    eat() {
        console.log(`${this.name} eating as Referee`);
    }

    static test() {
        console.log('static test');
    }
}

const r = new Referee(3, 'John');