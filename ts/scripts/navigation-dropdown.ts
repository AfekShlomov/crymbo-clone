const menu = document.querySelector(
  ".header-dropdown-navigation"
) as HTMLDivElement;
const menuButton = document.querySelector(
  "#dropdown-menu-button"
) as HTMLButtonElement;

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const logoDiv = document.querySelector(".logo-div") as HTMLDivElement;
logoDiv.addEventListener("click", () => {
  window.location.href = "/";
});

export {};
