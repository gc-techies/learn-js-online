import { add } from "../modules/cart-module.js";

export default function createProductCard(product, cartBadge) {
    let col = document.createElement('div');
    col.classList.add('col-lg-3', 'col-md-4', 'col-sm-12', 'mb-4');

    let card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = product.image;
    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = `${product.title}`;
    cardBody.appendChild(h5);

    let p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = `${product.category}`;
    cardBody.appendChild(p);

    let p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.innerText = `Price: $${product.price}`;
    cardBody.appendChild(p2);

    // button
    let addCart = document.createElement("button");
    addCart.classList.add("btn", "btn-primary");
    cardBody.appendChild(addCart);

    addCart.addEventListener("click", () =>{
        let count = add(product);
        cartBadge.innerHTML = count;
    })
    
    // carticon
    let cartIcon = document.createElement("i");
    cartIcon.classList.add("bi", "bi-cart3", "fs-5", "me-2");
    addCart.append(cartIcon, "Add To Cart");

    card.appendChild(cardBody);
    col.appendChild(card);
    return col;
}