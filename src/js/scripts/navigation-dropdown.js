const menu = document.querySelector(".dropdown-container");
const menuButton = document.querySelector(
  ".header__buttons-container__dropdown-menu-button"
);

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});
