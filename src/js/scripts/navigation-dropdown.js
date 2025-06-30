const menu = document.querySelector(".dropdown-container");
const menuButton = document.querySelector(".header--dropdown-menu-button");

console.log(menu, menuButton);

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const logoDiv = document.querySelector(".header__logo-container");
logoDiv.addEventListener("click", () => {
  window.location.href = "/";
});
