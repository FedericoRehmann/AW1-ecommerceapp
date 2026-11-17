import { navigationItems } from "../data/navigation.data.js";

function createRelativePath(rootPath, path) {
  return `${rootPath}${path}`;
}

export function renderNavbar(
  headerElement,
  currentPage,
  currentCategory,
  rootPath
) {
  const homeUrl = createRelativePath(rootPath, "index.html");
  const logoUrl = createRelativePath(rootPath, "img/logo-e-ring.png");
  const loginUrl = createRelativePath(
    rootPath,
    "pages/usuarios/login.html"
  );
  const registerUrl = createRelativePath(
    rootPath,
    "pages/usuarios/registro.html"
  );

  const navigationLinks = navigationItems
    .map((item) => {
      const isCurrentPage =
        item.page === currentPage &&
        (!item.category || item.category === currentCategory);

      const currentAttribute = isCurrentPage ? ' aria-current="page"' : "";

      return `
        <a
          class="nav-link"
          href="${createRelativePath(rootPath, item.path)}"
          ${currentAttribute}
        >
          ${item.title}
        </a>
      `;
    })
    .join("");

  headerElement.className = "site-header";

  headerElement.innerHTML = `
    <nav class="main-nav" aria-label="Navegación principal">
      <a class="brand" href="${homeUrl}" aria-label="Ir al inicio de E-Ring">
        <img class="brand-logo" src="${logoUrl}" alt="" />
      </a>

      <div class="primary-nav">
        ${navigationLinks}
      </div>

      <div class="account-nav">
        <a class="nav-link" href="${loginUrl}">Iniciar sesión</a>
        <a class="nav-link" href="${registerUrl}">Registrarse</a>
        <button class="nav-link logout-link" type="button">
          Cerrar sesión
        </button>
      </div>
    </nav>
  `;
}