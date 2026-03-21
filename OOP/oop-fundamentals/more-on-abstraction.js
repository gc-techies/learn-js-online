/*
    Hiding the complexities and only showing essentials
*/
// Object literal syntax
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
            console.log(`${player} given ${this.redCard}`);
        }
    }
}

function Referee(name) {
    this.name = name;
    // private props
    let yellowList = [];
    let yellowCard = 'yellow card';
    let redCard = 'red card';
    let checkPlayerHasYellow = function () {
        // function implementation
    }
    // Method 1 for getter
    this.getYellowList = function () {
        return yellowList;
    }
    // public function
    this.assignCard = function (player, cardVal) {
        if (cardVal === 1) {
            // logic to detect if a player previously has
            // a yellow card. If so, then a red card
            const found = yellowList.includes(player);
            if(found){
                console.log(`second yellow card for ${player}. ${player} sent off`);
            }else {
                yellowList.push(player);
                console.log(`${player} given ${yellowCard}`);
            }
        }else {
            console.log(`${player} given ${redCard}`);
        }
    }

    // better way
    Object.defineProperty(this, 'yellowList', {
        get: function () {
            return yellowList;
        },
        set: function (val) {
            if (typeof val !== 'array') {
                throw new Error("Array is expected");
            }
            yellowList = val;
        }
    });
}

const ref = new Referee('Howard Webb');