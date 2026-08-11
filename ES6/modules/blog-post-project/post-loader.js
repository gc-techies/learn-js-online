import createCard from "./card-creator.js";

let container = document.getElementById('posts');
fetch('http://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => {
    data.forEach((datum) => {
        let card = createCard(datum);
        container.appendChild(card);
    });
});

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));