let shotPower = 4;
let speed = 7;
let passAccuracy = 2;
let player = 'Ronaldo';
let card = 'yellow';

function freeKick(shotPower, speed, passAccuracy) {
    // ... implementation goes here
    const result = shotPower * speed * passAccuracy;
    console.log(result, 'free kick carried out');
}

function penaltyKick(shotPower, speed, passAccuracy){
    const result = shotPower * speed * passAccuracy;
    console.log(result, 'penalty kick carried out');
}

function assignCard(player, card) {
    console.log(`${player} given ${card}`);
}

freeKick(shotPower, speed, passAccuracy);
assignCard(player, card);

/*  1. ENCAPSULATION
    combining a group of related variables and functions
    into a unit called an OBJECT.
    Variables are called properties while functions are
    called methods. Together all are refered to as members
*/
let playerObj = {
    shotPower: 5,
    speed: 8,
    passAccuracy: 9,

    freeKick: function () {
        const result = shotPower * speed * passAccuracy;
        console.log(result, 'freekick carried out');
    },

    penaltyKick: function () {
        const result = shotPower * speed * passAccuracy;
        console.log(result, 'penalty carried out');
    }
}

let referee = {
    yellowCard: 'yellow card',
    redCard: 'red card',
    assignCard: function (player, cardVal) {
        if (cardVal === 1) {
            console.log(`${player} given ${this.yellowCard}`);
        }else {
            console.log(`${player} give ${this.redCard}`);
        }
    }
}

playerObj.freeKick();
playerObj.penaltyKick();
referee.assignCard(player, 2);