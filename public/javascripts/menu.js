const clase = (querySelect) => document.querySelector(querySelect);
/* menu */
clase(".header_burger").addEventListener("click", () => {
  clase("header ul").classList.toggle("closedMenu");
});

clase(".closeMenu").addEventListener("click", () => {
  clase("header ul").classList.toggle("closedMenu");
  clase(".categoriasButton").classList.remove("categoriasButtonOpen");
  clase(".categoriasMenu").classList.remove("categoriasMenuClosed");
});



/* menu categorias */
clase(".categoriasButton").addEventListener("click", () => {
  clase(".categoriasButton").classList.toggle("categoriasButtonOpen");
  clase(".categoriasMenu").classList.toggle("categoriasMenuClosed");
});

clase(".categoriasButton").addEventListener("click", () => {
  clase(".categoriasMenu").classList.toggle("closedMenu");
});


/* menu categorias de vista posts */
clase(".categoriasButtonPosts").addEventListener("click", () => {
  clase(".menuCategoriasPosts").classList.toggle("verMenuCategoriasPosts");
});