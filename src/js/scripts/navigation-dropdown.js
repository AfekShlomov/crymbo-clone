const menu = document.querySelector(".dropdown-container");
const menuButton = document.querySelector(
  ".header__buttons-container__dropdown-menu-button"
);

if (!menu) {
  throw new Error("failed to find menu element");
}
if (!menuButton) {
  throw new Error("failed to find menu button element");
}

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});
