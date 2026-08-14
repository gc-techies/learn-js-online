import Product from "./modules/product-module.js";
import createProductCard from "./components/product-card-creator.js";
import { showCart } from "./modules/cart-module.js";
import { checkOut } from "./components/offcanvas-checkout.js";

let flashSalesRow = document.getElementById("flash-sales-row");
let cartBadge = document.getElementById('item-counter');
let item = document.getElementById("cart-item");

let cartCount = 0;
cartBadge.innerHTML = cartCount;

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((output) => {
    for (let i = 0; i < output.length; i++) {
      let product = new Product(output[i]);
      
      let card = createProductCard(product, cartBadge);
      flashSalesRow.appendChild(card);
    }
  });

  const showCartButton = document.getElementById("show-cart");
  showCartButton.addEventListener("click", () => {
    item.innerHTML = ""; // Clear previous items  
    let cartItems = showCart();
      cartItems.forEach((product) => {
          let checkoutItem = checkOut(product);
          item.appendChild(checkoutItem);
      });
  });