// DOM => Document Object Model
let hONe = document.getElementById('h1_intro');
hONe.innerText = 'Segun and Muheez are in JS Online class';

let testRefClass = document.getElementsByClassName('test');
console.log(testRefClass);

hONe.addEventListener("click", externalFunction);

testRefClass[0].addEventListener("click", function () {
    console.log('click event from internal function');
})

function externalFunction() {
    console.log('click event raised from external function');
}

let btns = document.getElementsByClassName('buttons');

btns[0].addEventListener('click', function () {
    hONe.classList.add('bg-color');
});

btns[1].addEventListener('click', function () {
    hONe.classList.remove('bg-color');
});