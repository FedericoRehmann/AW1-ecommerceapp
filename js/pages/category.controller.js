import { getProducts } from "../api/products.api.js";
import { createProductCard } from "../components/product-card.component.js";

export async function initializeCategory(rootPath) {
  const currentCategory = document.body.dataset.category;
  const productGrid = document.querySelector(".product-grid");

  if (!currentCategory || !productGrid) {
    return;
  }

  try {
    const products = await getProducts(rootPath);

    const categoryProducts = products.filter((product) => {
      return product.category === currentCategory;
    });

    const productCards = categoryProducts.map((product) => {
      return createProductCard(product, rootPath);
    });

    productGrid.replaceChildren(...productCards);
  } catch (error) {
    const errorMessage = document.createElement("p");

    errorMessage.textContent =
      "No se pudieron cargar los productos. Intentá nuevamente más tarde.";

    productGrid.replaceChildren(errorMessage);

    console.error(error);
  }
}