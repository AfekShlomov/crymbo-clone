const buttons = {
  Oracle: document.querySelector(".Oracle"),
  Payment: document.querySelector(".Payment"),
  KYT: document.querySelector(".KYT"),
  Wallet: document.querySelector(".Wallet"),
  Custody: document.querySelector(".Custody"),
  Liquidity: document.querySelector(".Liquidity"),
};
const selectedButtons = [];

const resetBtn = document
  .querySelector(".Reset")
  .addEventListener("click", () => {
    selectedButtons.forEach((buttonClass) => {
      buttons[buttonClass].classList.remove("active");
    });
    selectedButtons.length = 0;
    filterItems();
  });

function handleClick(event) {
  const target = event.target;
  const classes = target.classList;

  if (!classes.contains("active")) {
    target.classList.add("active");
    selectedButtons.push(target.classList[0]);
    filterItems();
    return;
  } else {
    target.classList.remove("active");
    selectedButtons.splice(selectedButtons.indexOf(target.classList[0]), 1);
    filterItems();
    return;
  }
}

buttons.Oracle.addEventListener("click", handleClick);
buttons.Payment.addEventListener("click", handleClick);
buttons.KYT.addEventListener("click", handleClick);
buttons.Wallet.addEventListener("click", handleClick);
buttons.Custody.addEventListener("click", handleClick);
buttons.Liquidity.addEventListener("click", handleClick);

const items = document.querySelectorAll(".ecosystem-content-div > .item-div");

function filterItems() {
  if (selectedButtons.length === 0) {
    items.forEach((item) => {
      item.style.display = "flex";
    });
    return;
  }

  const selectedButtonsLowercase = selectedButtons.map((tag) => {
    if (tag.trim() === 'Oracle') {
      return 'crymbo oracle';
    }
    return tag.trim().toLowerCase();
  });

  items.forEach((item) => {
    const itemTag = item.querySelectorAll(".item-tag");
    const tagTexts = Array.from(itemTag).map((tag) =>
      tag.textContent.trim().toLowerCase()
    );

    if (tagTexts.some((tag) => selectedButtonsLowercase.includes(tag))) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
