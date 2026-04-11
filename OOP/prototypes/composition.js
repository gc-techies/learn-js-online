const canScout = {
    scout: function () {
        console.log('scouting');
    }
}

const canBet = {
    bet: function () {
        console.log('betting'); 
    }
}

const target = Object.assign({}, canScout, canBet);

function resetProto(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Beings(name) {
    // instance properties/members
    this.name = name;
}

Beings.prototype.run = function () {
    console.log(`${this.name} running as Being`);
};

function Referee(name) {
    // call super constructor to initialize instance properties/members of Beings
    Beings.call(this, name);
}

// set prototype before creting instances of Referee
resetProto(Beings, Referee);
Referee.prototype.run = function () {
    // use this approach if super implementation uses 'this' keyword and you want to use the return value of super implementation
    // Beings.prototype.run.call(this);
    console.log('referee running');
};
// Object.assign(Referee.prototype, canBet);

function Player(name) {
    // call super constructor to initialize instance properties/members of Beings
    Beings.call(this, name);
}

// set prototype before creting instances of Player
resetProto(Beings, Player);
Player.prototype.run = function () {
    Beings.prototype.run.call(this);
    console.log('player running');
}

function Manager(name) {
    // call super constructor to initialize instance properties/members of Beings
    Beings.call(this, name);
}

// set prototype before creting instances of Manager
resetProto(Beings, Manager);
Object.assign(Manager.prototype, canScout);

let referee = new Referee('referee1');
// console.log(referee.constructor);
let ref = new Referee.prototype.constructor('referee2');

let player = new Player('player1');

let manager = new Manager('manager1');