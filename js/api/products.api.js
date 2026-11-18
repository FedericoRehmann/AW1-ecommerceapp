export async function getProducts(rootPath) {
  const response = await fetch(`${rootPath}data/products.json`);

  if (!response.ok) {
    throw new Error("No se pudieron cargar los productos.");
  }

  const products = await response.json();
  return products;
}