import { products } from "../data/products.data.js";
import { createProductCard } from "../components/product-card.component.js";

export function initializeCategory() {
  const currentCategory = document.body.dataset.category;
  const productGrid = document.querySelector(".product-grid");

  if (!currentCategory || !productGrid) {
    return;
  }

  const categoryProducts = products.filter((product) => {
    return product.category === currentCategory;
  });

  productGrid.replaceChildren();

  const productCards = categoryProducts.map((product) => {
    return createProductCard(product);
  });

  productGrid.append(...productCards);
}
