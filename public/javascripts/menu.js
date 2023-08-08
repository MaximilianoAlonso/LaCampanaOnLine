const $ = (id) => document.querySelector(id);

$(".closeMenu").addEventListener("click", () => {
  $("header ul").classList.toggle("closedMenu");
});

$(".header_burger").addEventListener("click", () => {
  $("header ul").classList.toggle("closedMenu");
});
