import { products } from "./product.js";
import { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "./cart.js";

function updateProductDisplay() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "card my-3";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.textContent = `${product.name}: $${product.price}`;
    const addToCartButton = document.createElement("button");
    addToCartButton.className = "btn btn-primary ms-5";
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(product);
      updateCartDisplay();
    });
    cardBody.appendChild(addToCartButton);
    productElement.appendChild(cardBody);
    container.appendChild(productElement);
  });
}

function updateCartDisplay() {
  const container = document.getElementById("cartContainer");
  container.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "card my-3";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.textContent = `${item.product.name}: $${item.product.price} x ${item.quantity} = $${item.product.price * item.quantity}`;
    const increaseButton = document.createElement("button");
    increaseButton.className = "btn btn-success mx-1";
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => {
      increaseQuantity(item.product);
      updateCartDisplay();
    });
    const decreaseButton = document.createElement("button");
    decreaseButton.className = "btn btn-warning mx-1";
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => {
      decreaseQuantity(item.product);
      updateCartDisplay();
    });
    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger mx-1";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeFromCart(item.product);
      updateCartDisplay();
    });
    cardBody.appendChild(increaseButton);
    cardBody.appendChild(decreaseButton);
    cardBody.appendChild(removeButton);
    itemElement.appendChild(cardBody);
    container.appendChild(itemElement);
    total += item.product.price * item.quantity;
  });
  const totalElement = document.createElement("div");
  totalElement.textContent = `Total: $${total}`;
  container.appendChild(totalElement);
}

function setUpClearCartButton() {
  const button = document.getElementById("clearCart");
  button.addEventListener("click", () => {
    clearCart();
    updateCartDisplay();
  });
}

updateProductDisplay();
setUpClearCartButton();
