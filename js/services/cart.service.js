const CART_STORAGE_KEY = "e-ring-cart";

export function getCart() {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) {
    return [];
  }

  try {
    return JSON.parse(storedCart);
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(product, quantity) {
  const cart = getCart();

  const existingProduct = cart.find((cartProduct) => {
    return cartProduct.id === product.id;
  });

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      alt: product.alt,
      quantity
    });
  }

  saveCart(cart);
}

export function updateCartItemQuantity(productId, quantity) {
  const cart = getCart();

  const product = cart.find((cartProduct) => {
    return cartProduct.id === productId;
  });

  if (!product) {
    return;
  }

  product.quantity = quantity;

  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = getCart();

  const updatedCart = cart.filter((product) => {
    return product.id !== productId;
  });

  saveCart(updatedCart);
}