export function initializeLogout() {
  const logoutButton = document.querySelector(".logout-link");

  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener("click", () => {
    const loginPageUrl = new URL(
      "../../pages/usuarios/login.html",
      import.meta.url
    );
    window.location.href = loginPageUrl.href;
  });
}