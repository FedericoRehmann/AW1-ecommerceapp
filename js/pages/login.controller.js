export function initializeLogin() {
  const loginForm = document.querySelector(".auth-form");

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../../index.html";
  });
}