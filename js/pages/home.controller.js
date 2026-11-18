import { getProducts } from "../api/products.api.js";
import { createProductCard } from "../components/product-card.component.js";

const categories = [
  {
    id: "armas",
    title: "Armas",
    link: "pages/categorias/armas.html"
  },
  {
    id: "armaduras",
    title: "Armaduras",
    link: "pages/categorias/armaduras.html"
  },
  {
    id: "talismanes",
    title: "Talismanes",
    link: "pages/categorias/talismanes.html"
  },
  {
    id: "consumibles",
    title: "Consumibles",
    link: "pages/categorias/consumibles.html"
  }
];

export async function initializeHome(rootPath) {
  const homeProducts = document.querySelector("#home-products");

  if (!homeProducts) {
    return;
  }

  try {
    const products = await getProducts(rootPath);

    const categorySections = categories.map((category) => {
      const categoryProducts = products
        .filter((product) => {
          return product.category === category.id;
        })
        .slice(0, 2);

      const categorySection = document.createElement("section");
      const categoryHeader = document.createElement("div");
      const categoryTitle = document.createElement("h2");
      const categoryLink = document.createElement("a");
      const productGrid = document.createElement("div");

      categorySection.className = "home-category-section";
      categoryHeader.className = "home-category-header";
      categoryTitle.className = "home-category-title";
      categoryLink.className = "home-category-link";
      productGrid.className = "home-product-grid";

      categoryTitle.textContent = category.title;
      categoryLink.href = `${rootPath}${category.link}`;
      categoryLink.textContent = `Ver todas las ${category.title.toLowerCase()} →`;

      const productCards = categoryProducts.map((product) => {
        return createProductCard(product, rootPath);
      });

      categoryHeader.append(categoryTitle, categoryLink);
      productGrid.append(...productCards);
      categorySection.append(categoryHeader, productGrid);

      return categorySection;
    });

    homeProducts.replaceChildren(...categorySections);
  } catch (error) {
    const errorMessage = document.createElement("p");

    errorMessage.textContent =
      "No se pudieron cargar los productos. Intentá nuevamente más tarde.";

    homeProducts.replaceChildren(errorMessage);

    console.error(error);
  }
}