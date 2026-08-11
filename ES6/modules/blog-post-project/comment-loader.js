import createCard from "./card-creator.js";

let container = document.getElementById('comments');
fetch('http://jsonplaceholder.typicode.com/comments')
.then((res) => res.json())
.then((data) => {
    data.forEach((datum) => {
        let card = createCard(datum);
        container.appendChild(card);
    });
});