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

person.country = '9ja';
person['state'] = 'Ogun';

delete person.speed;
console.log(person);