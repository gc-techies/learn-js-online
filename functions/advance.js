const player = {
    firstName: 'Bora',
    lastName: 'Worldwide',
    height: 5,

    // functions in objects are called methods
    fullName: function () {
        return player.firstName + ' ' + player.lastName
    },

    getFirstName() {
        return player.firstName;
    },

    setFirstName(value){
        this.firstName = value;
    },

    // Accessor methods
    // getter
    get firstName(){
        return firstName;
    },

    // setter
    set firstName(value){
        firstName = value;
    }
}

// const fullName = player.firstName + ' ' + player.lastName

// player.setFirstName('Muiz');
player.firstName = 'Muiz';
console.log(firstName);