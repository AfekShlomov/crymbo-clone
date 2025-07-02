const menu = document.querySelector(".dropdown-container");
const menuButton = document.querySelector(".header--dropdown-menu-button");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});