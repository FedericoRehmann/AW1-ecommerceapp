import { renderNavbar } from "./components/navbar.component.js";
import { initializeHome } from "./pages/home.controller.js";
import { initializeLogin } from "./pages/login.controller.js";
import { initializeLogout } from "./pages/logout.controller.js";
import { initializeCategory } from "./pages/category.controller.js";
import { initializeCart } from "./pages/cart.controller.js";

const currentPage = document.body.dataset.page;
const currentCategory = document.body.dataset.category;
const appHeader = document.querySelector("#app-header");

const rootPath =
  currentPage === "category" || currentPage === "cart" ? "../../" : "";

if (
  currentPage === "home" ||
  currentPage === "category" ||
  currentPage === "cart"
) {
  renderNavbar(appHeader, currentPage, currentCategory, rootPath);
  initializeLogout(rootPath);
}

if (currentPage === "home") {
  initializeHome(rootPath);
}

if (currentPage === "category") {
  initializeCategory(rootPath);
}

if (currentPage === "cart") {
  initializeCart(rootPath);
}

if (currentPage === "login") {
  initializeLogin();
}