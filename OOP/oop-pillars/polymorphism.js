// Poly => many
// Morph => Forms

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

let playerObj = {
    shotPower: 5,
    passAccuracy: 9,

    freeKick: function () {
        const result = shotPower * speed * passAccuracy;
        console.log(result, 'freekick carried out');
    },

    penaltyKick: function () {
        const result = shotPower * speed * passAccuracy;
        console.log(result, 'penalty carried out');
    },

    participate: function () {
        console.log('player participating');
    },
}
// tell player object to inherit from person object: (inherit speed property and run method)

let referee = {
    yellowList: [],
    yellowCard: 'yellow card',
    redCard: 'red card',

    assignCard: function (player, cardVal) {
        if (cardVal === 1) {
            // logic to detect if a player previously has
            // a yellow card. If so, then a red card
            const found = this.yellowList.includes(player);
            if(found){
                console.log(`second yellow card for ${player}. ${player} sent off`);
            }else {
                this.yellowList.push(player);
                console.log(`${player} given ${this.yellowCard}`);
            }
        }else {
            console.log(`${player} give ${this.redCard}`);
        }
    },

    participate: function () {
        console.log('referee participating');
    },
}
// tell referee object to inherit from person object: (inherit speed property and run method)

let manager = {
    participate: function () {
        console.log('manager participating');
    },
}
// tell manager object to inherit from person object: (inherit speed property and run method)

/*  PROCEDURAL PROGRAMMING WAY FOR IMPLEMENTING participation logic
    if(obj.type === 'player'){
        playerParticipate();
    }else if(obj.type === 'referee'){
        refereeParticipate();
    }else {
        managerParticipate();
    }
*/

manager.participate();