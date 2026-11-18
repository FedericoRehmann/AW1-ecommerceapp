import { createCartItem } from "../components/cart-item.component.js";
import {
  getCart,
  removeFromCart,
  updateCartItemQuantity
} from "../services/cart.service.js";

const SHIPPING_COST = 1500;

function formatPrice(price) {
  return `${price.toLocaleString("es-AR")} runas`;
}

export function initializeCart(rootPath) {
  const cartItems = document.querySelector("#cart-items");
  const emptyCartMessage = document.querySelector("#empty-cart-message");
  const cartSubtotal = document.querySelector("#cart-subtotal");
  const cartShipping = document.querySelector("#cart-shipping");
  const cartTotal = document.querySelector("#cart-total");

  if (
    !cartItems ||
    !emptyCartMessage ||
    !cartSubtotal ||
    !cartShipping ||
    !cartTotal
  ) {
    return;
  }

  function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
      cartItems.replaceChildren();
      emptyCartMessage.hidden = false;
      cartSubtotal.textContent = formatPrice(0);
      cartShipping.textContent = formatPrice(0);
      cartTotal.textContent = formatPrice(0);

      return;
    }

    emptyCartMessage.hidden = true;

    const cartItemElements = cart.map((product) => {
      return createCartItem(
        product,
        rootPath,
        (productId, quantity) => {
          updateCartItemQuantity(productId, quantity);
          renderCart();
        },
        (productId) => {
          removeFromCart(productId);
          renderCart();
        }
      );
    });

    const subtotal = cart.reduce((currentTotal, product) => {
      return currentTotal + product.price * product.quantity;
    }, 0);

    const total = subtotal + SHIPPING_COST;

    cartItems.replaceChildren(...cartItemElements);
    cartSubtotal.textContent = formatPrice(subtotal);
    cartShipping.textContent = formatPrice(SHIPPING_COST);
    cartTotal.textContent = formatPrice(total);
  }

  renderCart();
}