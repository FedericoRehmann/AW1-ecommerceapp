import { saveLoggedUser } from "../services/session.service.js";

export function initializeLogin() {
  const loginForm = document.querySelector(".auth-form");

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get("email");

    saveLoggedUser(email);

    window.location.href = "../../index.html";
  });
}