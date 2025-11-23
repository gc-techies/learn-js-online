let b = [8, 9, 1, 3, 5];
b.sort();
console.log(b);

const objArr = [
    {
        id: 7,
        name: 'Bora'
    },
    {
        id: 2,
        name: 'Segun'
    },
    {
        id: 1,
        name: 'Muheez'
    },
    {
        id: 3,
        name: 'GCT'
    },
];

const objArrTwo = [
    {
        id: 7,
        name: 'Bora'
    },
    {
        id: 2,
        name: 'Segun'
    },
    {
        id: 1,
        name: 'muheez'
    },
    {
        id: 3,
        name: 'GCT'
    },
];

const objArrThree = [
    {
        id: 7,
        name: 'Bora'
    },
    {
        id: 4,
        name: 'bora'
    },
    {
        id: 2,
        name: 'Segun'
    },
    {
        id: 1,
        name: 'muheez'
    },
    {
        id: 3,
        name: 'GCT'
    },
];

// regular anonymous function
objArr.sort(function(a, b){
    if(a.id < b.id){
        return -1;
    }
    if(a.id > b.id){
        return 1;
    }
    return 0;
});

// arrow function
objArrTwo.sort((a, b) => {
    if(a.id < b.id){
        return -1;
    }
    if(a.id > b.id){
        return 1;
    }
    return 0;
});

objArrThree.sort((a, b) => {
    if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }
    if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
    }
    return 0;
})
console.log(objArr, objArrTwo, objArrThree);

let str = 'my name is ibrahim';
console.log(str.toUpperCase());