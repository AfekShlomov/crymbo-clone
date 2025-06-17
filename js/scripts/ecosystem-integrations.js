const buttons = {
  Oracle: document.querySelector(".Oracle"),
  Payment: document.querySelector(".Payment"),
  KYT: document.querySelector(".KYT"),
  Wallet: document.querySelector(".Wallet"),
  Custody: document.querySelector(".Custody"),
  Liquidity: document.querySelector(".Liquidity"),
};
const selectedButtons = [];

let searchTerm = "";
const searchInput = document.querySelector("#search-bar");
searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.toLowerCase().trim();
  filterItems();
});

const resetBtn = document.querySelector(".Reset");
resetBtn.addEventListener("click", () => {
  selectedButtons.forEach((buttonClass) => {
    buttons[buttonClass].classList.remove("active");
  });
  selectedButtons.length = 0;
  searchInput.value = "";
  searchTerm = "";
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

const items = document.querySelectorAll(".dev-ecosystem-section .content-div > .item-div");

function filterItems() {
  if (selectedButtons.length === 0 && searchTerm === "") {
    // no filters selected
    items.forEach((item) => {
      item.style.display = "flex";
    });
    return;
  }

  const selectedButtonsLowercase = selectedButtons.map((tag) => {
    if (tag.trim() === "Oracle") {
      return "crymbo oracle";
    }
    return tag.trim().toLowerCase();
  });

  console.log(
    "Selected buttons:",
    selectedButtonsLowercase,
    "Search term:",
    searchTerm
  );

  items.forEach((item) => {
    const itemTag = item.querySelectorAll(".item-tag");
    const tagTexts = Array.from(itemTag).map((tag) =>
      tag.textContent.trim().toLowerCase()
    );
    const itemTitle = item.querySelector("h3").textContent.toLowerCase().trim();
    const titleInclusion = itemTitle.includes(searchTerm);
    const tagInclusion = tagTexts.some((tag) =>
      selectedButtonsLowercase.includes(tag)
    );

    if (itemTitle !== "" && selectedButtons.length === 0) {
      // Empty buttons and full saerch bar
      item.style.display = titleInclusion ? "flex" : "none";
      return;
    } else if (selectedButtons.length > 0 && searchTerm === "") {
      // filled buttons and empty search bar
      item.style.display = tagInclusion ? "flex" : "none";
    } else {
      // both search bar and buttons filled
      item.style.display = titleInclusion && tagInclusion ? "flex" : "none";
    }
  });
}
