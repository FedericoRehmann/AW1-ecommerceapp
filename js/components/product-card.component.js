function formatPrice(price) {
  return `${price.toLocaleString("es-AR")} runas`;
}

export function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.productId = product.id;
  card.innerHTML = `
    <img
      class="product-image"
      src="${product.image}"
      alt="${product.alt}"
    />
    <div class="product-info">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description">
        ${product.description}
      </p>
      <p class="product-price">
        ${formatPrice(product.price)}
      </p>
      <div class="quantity-selector">
        <span class="quantity-label">Cantidad</span>
        <div class="quantity-controls">
          <button
            class="quantity-button"
            type="button"
            aria-label="Disminuir cantidad de ${product.title}"
          >
            -
          </button>
          <output class="quantity-value" aria-live="polite">1</output>
          <button
            class="quantity-button"
            type="button"
            aria-label="Aumentar cantidad de ${product.title}"
          >
            +
          </button>
        </div>
      </div>
      <button class="product-button" type="button">
        Agregar al carrito
      </button>
    </div>
  `;
  const decreaseButton = card.querySelectorAll(".quantity-button")[0];
  const increaseButton = card.querySelectorAll(".quantity-button")[1];
  const quantityValue = card.querySelector(".quantity-value");
  let quantity = 1;

  function updateQuantity() {
    quantityValue.textContent = quantity;
  }

  decreaseButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity -= 1;
      updateQuantity();
    }
  });

  increaseButton.addEventListener("click", () => {
    quantity += 1;
    updateQuantity();
  });

  return card;
}