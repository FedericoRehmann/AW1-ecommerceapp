function formatPrice(price) {
  return `${price.toLocaleString("es-AR")} runas`;
}

function createQuantityOptions(selectedQuantity) {
  const maxQuantity = Math.max(10, selectedQuantity);

  return Array.from({ length: maxQuantity }, (_, index) => {
    const quantity = index + 1;
    const selected = quantity === selectedQuantity ? "selected" : "";

    return `
      <option value="${quantity}" ${selected}>
        ${quantity}
      </option>
    `;
  }).join("");
}

export function createCartItem(
  product,
  rootPath,
  onQuantityChange,
  onRemove
) {
  const cartItem = document.createElement("article");
  const imagePath = `${rootPath}${product.image}`;
  const subtotal = product.price * product.quantity;

  cartItem.className = "cart-item";
  cartItem.dataset.productId = product.id;

  cartItem.innerHTML = `
    <img
      class="cart-item-image"
      src="${imagePath}"
      alt="${product.alt}"
    />

    <div class="cart-item-info">
      <h2 class="cart-item-title">${product.title}</h2>

      <p class="cart-item-description">
        ${product.description}
      </p>

      <p class="cart-item-price">
        Precio unitario: ${formatPrice(product.price)}
      </p>

      <label class="cart-item-quantity" for="quantity-${product.id}">
        Cantidad
      </label>

      <select
        class="cart-item-quantity-select"
        id="quantity-${product.id}"
      >
        ${createQuantityOptions(product.quantity)}
      </select>

      <p class="cart-item-subtotal">
        Subtotal: ${formatPrice(subtotal)}
      </p>
    </div>

    <button class="remove-item-button" type="button">
      Eliminar
    </button>
  `;

  const quantitySelect = cartItem.querySelector(
    ".cart-item-quantity-select"
  );
  const removeButton = cartItem.querySelector(".remove-item-button");

  quantitySelect.addEventListener("change", () => {
    const newQuantity = Number(quantitySelect.value);

    onQuantityChange(product.id, newQuantity);
  });

  removeButton.addEventListener("click", () => {
    onRemove(product.id);
  });

  return cartItem;
}