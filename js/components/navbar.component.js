import { navigationItems } from "../data/navigation.data.js";
import { getLoggedUser } from "../services/session.service.js";

function createRelativePath(rootPath, path) {
  return `${rootPath}${path}`;
}

function closeMenu(menu, button) {
  menu.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");

  window.setTimeout(() => {
    if (!menu.classList.contains("is-open")) {
      menu.hidden = true;
    }
  }, 200);
}

function openMenu(menu, button) {
  menu.hidden = false;
  button.setAttribute("aria-expanded", "true");

  window.requestAnimationFrame(() => {
    menu.classList.add("is-open");
  });
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
  const cartUrl = createRelativePath(
    rootPath,
    "pages/carrito/carrito.html"
  );

  const loggedUser = getLoggedUser();

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

  const accountMenuContent = loggedUser
    ? `
      <button class="account-menu-link logout-link" type="button">
        Cerrar sesión
      </button>
    `
    : `
      <a class="account-menu-link" href="${loginUrl}">
        Iniciar sesión
      </a>

      <a class="account-menu-link" href="${registerUrl}">
        Registrarse
      </a>
    `;

  headerElement.className = "site-header";

  headerElement.innerHTML = `
    <nav class="main-nav" aria-label="Navegación principal">
      <button
        class="category-menu-toggle"
        type="button"
        aria-label="Abrir menú de categorías"
        aria-controls="category-menu"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a class="brand" href="${homeUrl}" aria-label="Ir al inicio de E-Ring">
        <img class="brand-logo" src="${logoUrl}" alt="" />
      </a>

      <div class="primary-nav" id="category-menu">
        ${navigationLinks}
      </div>

      <div class="nav-actions">
        <a
          class="cart-link"
          href="${cartUrl}"
          aria-label="Ir al carrito"
          ${currentPage === "cart" ? 'aria-current="page"' : ""}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20.5 8H6" />
            <circle cx="10" cy="20" r="1.3" />
            <circle cx="17" cy="20" r="1.3" />
          </svg>
        </a>

        <div class="account-menu-wrapper">
          <button
            class="account-menu-toggle"
            type="button"
            aria-label="Abrir menú de usuario"
            aria-controls="account-menu"
            aria-expanded="false"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
            </svg>
          </button>

          <div class="account-menu" id="account-menu" hidden>
            ${accountMenuContent}
          </div>
        </div>
      </div>
    </nav>
  `;

  const categoryMenuToggle = headerElement.querySelector(
    ".category-menu-toggle"
  );
  const categoryMenu = headerElement.querySelector(".primary-nav");
  const accountMenuToggle = headerElement.querySelector(
    ".account-menu-toggle"
  );
  const accountMenu = headerElement.querySelector(".account-menu");

  categoryMenuToggle.addEventListener("click", () => {
    const isOpen =
      categoryMenuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      categoryMenu.classList.remove("is-open");
      categoryMenuToggle.setAttribute("aria-expanded", "false");

      return;
    }

    categoryMenu.classList.add("is-open");
    categoryMenuToggle.setAttribute("aria-expanded", "true");
    closeMenu(accountMenu, accountMenuToggle);
  });

  accountMenuToggle.addEventListener("click", () => {
    const isOpen =
      accountMenuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu(accountMenu, accountMenuToggle);

      return;
    }

    openMenu(accountMenu, accountMenuToggle);
    categoryMenu.classList.remove("is-open");
    categoryMenuToggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    if (!headerElement.contains(event.target)) {
      categoryMenu.classList.remove("is-open");
      categoryMenuToggle.setAttribute("aria-expanded", "false");
      closeMenu(accountMenu, accountMenuToggle);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      categoryMenu.classList.remove("is-open");
      categoryMenuToggle.setAttribute("aria-expanded", "false");
      closeMenu(accountMenu, accountMenuToggle);
    }
  });
}