import { clearLoggedUser } from "../services/session.service.js";

export function initializeLogout(rootPath) {
  const logoutButton = document.querySelector(".logout-link");

  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener("click", () => {
    clearLoggedUser();

    window.location.href = `${rootPath}pages/usuarios/login.html`;
  });
}