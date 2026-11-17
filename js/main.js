import { renderNavbar } from "./components/navbar.component.js";
import { initializeLogin } from "./pages/login.controller.js";
import { initializeLogout } from "./pages/logout.controller.js";
import { initializeCategory } from "./pages/category.controller.js";

const currentPage = document.body.dataset.page;
const currentCategory = document.body.dataset.category;
const appHeader = document.querySelector("#app-header");

const rootPath = currentPage === "category" ? "../../" : "";

if (currentPage === "home" || currentPage === "category") {
  renderNavbar(appHeader, currentPage, currentCategory, rootPath);
  initializeLogout(rootPath);
}

if (currentPage === "category") {
  initializeCategory();
}

if (currentPage === "login") {
  initializeLogin();
}