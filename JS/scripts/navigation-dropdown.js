const menu = document.querySelector(".header-dropdown-navigation");
const menuButton = document.querySelector("#dropdown-menu-button");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const logoDiv = document.querySelector(".logo-div");
logoDiv.addEventListener("click", () => {
  window.location.href = "/";
});
