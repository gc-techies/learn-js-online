/*
    Hiding the complexities and only showing essentials
*/

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
    }
}
referee.assignCard('Ronaldo', 1);
referee.assignCard('Ronaldo', 1);