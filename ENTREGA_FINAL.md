# E-Ring — Entrega Final

**Autor:** Federico Nicolas Rehmann  
**Materia:** Aplicaciones Web 1

## Enlace al proyecto publicado

[E-Ring publicado en GitHub Pages](https://federicorehmann.github.io/AW1-ecommerceapp/)

## Repositorio del proyecto

[Repositorio público de E-Ring](https://github.com/FedericoRehmann/AW1-ecommerceapp)

## Descripción del proyecto

E-Ring es una aplicación web de ecommerce inspirada en el universo de Elden Ring. El sitio permite explorar categorías de productos, iniciar sesión de forma simulada, visualizar productos obtenidos desde un archivo JSON y administrar un carrito de compras persistente.

La aplicación cuenta con las categorías Armas, Armaduras, Talismanes y Consumibles. Cada producto incluye imagen, título, descripción, precio y control de cantidad.

## Roadmap de desarrollo

| Etapa                       | Objetivo                                                             | Implementación realizada                                                                                                                    | Iteraciones y mejoras                                                                                                             |
| --------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1. Estructura inicial       | Crear la base general del ecommerce.                                 | Se creó un repositorio público, README, Home, cuatro categorías, Login y Registro.                                                          | Se definió una estructura inicial de carpetas, archivos HTML y rutas relativas.                                                   |
| 2. Identidad visual         | Diseñar una interfaz coherente con la temática elegida.              | Se incorporaron paleta oscura y dorada, logo, fuentes Cinzel y Crimson Pro, cards, formularios, footer y diseño adaptable.                  | Se ajustaron bordes, transiciones, imágenes, jerarquía visual y distribución de los elementos.                                    |
| 3. Componentes y navegación | Mejorar la mantenibilidad mediante JavaScript.                       | Se crearon módulos, datos de navegación, navbar reutilizable, redirecciones de Login y Logout, y componentes de cards de producto.          | El navbar dejó de repetirse manualmente en cada archivo HTML y pasó a renderizarse dinámicamente.                                 |
| 4. Datos y carrito          | Incorporar los productos definitivos y persistencia en el navegador. | Se creó un archivo JSON, se obtuvieron productos mediante Fetch API, se incorporó sessionStorage, localStorage y un carrito de compras.     | Se reemplazaron datos temporales por imágenes reales, se agregó el resumen de compra, eliminación de productos y compra simulada. |
| Finalización                | Preparar el producto para su publicación y entrega.                  | Se implementó un navbar dinámico y responsive, menú hamburguesa, menú de perfil, animaciones, revisión final y publicación en GitHub Pages. | Se priorizó la experiencia de usuario, accesibilidad, navegación adaptable y corrección de rutas relativas.                       |

## Tecnologías utilizadas

| Tecnología o herramienta | Uso dentro del proyecto                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| HTML5                    | Estructura semántica de las páginas, formularios, navegación, contenido y accesibilidad.                              |
| CSS3                     | Diseño visual, paleta de colores, layout con Grid y Flexbox, diseño responsive, transiciones y animaciones.           |
| JavaScript               | Interactividad general, manipulación del DOM, componentes reutilizables, eventos, redirecciones y lógica del carrito. |
| JSON                     | Fuente de datos local para almacenar los productos definitivos del ecommerce.                                         |
| Fetch API                | Obtención asíncrona de los productos desde `data/products.json`.                                                      |
| sessionStorage           | Almacenamiento temporal del email del usuario que inició sesión durante la sesión actual.                             |
| localStorage             | Persistencia del carrito de compras, cantidades de productos y datos necesarios para el resumen del pedido.           |
| Google Fonts             | Incorporación de las tipografías Cinzel y Crimson Pro para reforzar la identidad visual medieval del proyecto.        |
| Git y GitHub             | Control de versiones, repositorio público y seguimiento del desarrollo del proyecto.                                  |
| GitHub Pages             | Publicación pública del sitio web final.                                                                              |

## Mejora significativa

La mejora significativa principal fue el rediseño del sistema de navegación.

El navbar inicial evolucionó hacia un componente dinámico y reutilizable. En pantallas grandes muestra las categorías de forma visible, mientras que en pantallas pequeñas utiliza un menú hamburguesa adaptable. También incorpora un menú de perfil que cambia según exista o no una sesión iniciada: permite acceder a Login y Registro cuando no hay sesión, o cerrar sesión cuando el usuario está logueado.

Esta mejora aporta:

- Mejor experiencia de usuario en computadoras y dispositivos móviles.
- Navegación adaptable mediante diseño responsive.
- Menús con transiciones y animaciones suaves.
- Mejor accesibilidad mediante botones, etiquetas `aria-label`, `aria-controls`, `aria-expanded` y cierre de menús con la tecla Escape. (ARIA (Accessible Rich Internet Applications) son atributos de accesibilidad, que su función es explicarles a los lectores qué hace un control y en qué estado está.)
- Reutilización del navbar desde un único componente de JavaScript.

Como mejora adicional, se desarrolló un carrito de compras persistente. El usuario puede agregar productos, modificar cantidades, eliminar productos, visualizar subtotales, envío fijo, total del pedido y finalizar una compra simulada que vacía el carrito.

## Video explicativo

[Video Explicativo](https://youtu.be/9fAhY6JV5LI)
