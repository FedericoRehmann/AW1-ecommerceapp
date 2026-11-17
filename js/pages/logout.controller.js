export function initializeLogout(rootPath) {
  const logoutButton = document.querySelector(".logout-link");

  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener("click", () => {
    window.location.href = `${rootPath}pages/usuarios/login.html`;
  });
}