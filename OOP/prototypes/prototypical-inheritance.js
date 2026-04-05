function Beings(name) {
    // instance properties/members
    this.name = name;
}

Beings.prototype.run = function () {
    return 'being is running';
};

function Test(name) {
}

function Referee(name) {
    // call super constructor to initialize instance properties/members of Beings
    Beings.call(this, name);
}

// set prototype before creting instances of Referee
Referee.prototype = Object.create(Beings.prototype);
Referee.prototype.constructor = Referee; // set constructor property to Referee

function Player(name) {
    // call super constructor to initialize instance properties/members of Beings
    Beings.call(this, name);
}

// set prototype before creting instances of Player
Player.prototype = Object.create(Beings.prototype);
Player.prototype.constructor = Player; // set constructor property to Player

function Manager(name) {
    // call super constructor to initialize instance properties/members of Beings
    Beings.call(this, name);
}

// set prototype before creting instances of Manager
Manager.prototype = Object.create(Beings.prototype);
Manager.prototype.constructor = Manager; // set constructor property to Manager

let referee = new Referee('referee1');
console.log(referee.constructor);
let ref = new Referee.prototype.constructor('referee2');
console.log(ref.constructor);
console.log(referee.constructor === ref.constructor);
/*
    this implies 
    new Test.prototype.constructor('name') === new Test('name') 
    because both are same
*/

let player = new Player('player1');
console.log(player.constructor);

let manager = new Manager('manager1');