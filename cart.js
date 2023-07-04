export let cart = [];

export function addToCart(product, quantity = 1) {
  let item = cart.find((item) => item.product.id === product.id);
  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
}

export function removeFromCart(product) {
  cart = cart.filter((item) => item.product.id !== product.id);
}

export function increaseQuantity(product) {
  let item = cart.find((item) => item.product.id === product.id);
  if (item) {
    item.quantity += 1;
  }
}

export function decreaseQuantity(product) {
  let item = cart.find((item) => item.product.id === product.id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  }
}

export function clearCart() {
  cart = [];
}
