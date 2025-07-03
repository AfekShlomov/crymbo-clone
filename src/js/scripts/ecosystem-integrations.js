const buttons = {
  Oracle: document.getElementById("Oracle"),
  Payment: document.getElementById("Payment"),
  KYT: document.getElementById("KYT"),
  Wallet: document.getElementById("Wallet"),
  Custody: document.getElementById("Custody"),
  Liquidity: document.getElementById("Liquidity"),
};
const searchInput = document.getElementById("search-bar");
const resetBtn = document.getElementById("Reset");
const items = document.querySelectorAll(
  ".ecosystem__content-div__item-container"
);

Object.values(buttons).forEach((button) => {
  if (!button) {
    throw new Error("failed tofind button");
  }
});
if (!searchInput) {
  throw new Error("failed to find search input");
}
if (!resetBtn) {
  throw new Error("failed to find reset button");
}
if (!items) {
  throw new Error("failed to find items");
}

const selectedButtons = [];
let searchTerm = "";

items.forEach((item, i) => {
  item.title = item.querySelector("h3").textContent.toLowerCase().trim();
  item.tag = [...item.querySelectorAll(".item-tag")];

  if (!item.title) {
    throw new Error("failed to find item title at " + i);
  }
  if (!item.tag) {
    throw new Error("failed to find item tags at " + i);
  }

  item.tag = item.tag.map((tag) => tag.textContent.trim().toLowerCase());
});

function handleClick(event) {
  const target = event.target;

  if (target.classList.length === 0) {
    target.classList.add("active");
    selectedButtons.push(target.id);

    filterItems();
    return;
  }
  if (target.classList.length !== 0) {
    target.classList.remove("active");
    selectedButtons.splice(selectedButtons.indexOf(target.id), 1);
    filterItems();
    return;
  }
  return;
}

function arrayToLowercase(array) {
  const lowercaseTags = [];

  array.forEach((tag) => {
    tag.trim() === "Oracle"
      ? lowercaseTags.push("crymbo oracle")
      : lowercaseTags.push(tag.toLowerCase());
  });
  return lowercaseTags;
}

function filterItems() {
  if (selectedButtons.length === 0 && searchTerm === "") {
    // no filters selected
    items.forEach((item) => {
      item.classList.add("active");
    });
    return;
  }

  const selectedButtonsLowercase = arrayToLowercase(selectedButtons);

  items.forEach((item) => {
    const tagTexts = arrayToLowercase(item.tag);
    const titleInclusion = item.title.includes(searchTerm);
    const tagInclusion = tagTexts.some((tag) =>
      selectedButtonsLowercase.includes(tag)
    );

    if (searchTerm !== "" && selectedButtons.length === 0) {
      // Empty buttons and full saerch bar
      titleInclusion
        ? item.classList.add("active")
        : item.classList.remove("active");
      return;
    }
    if (selectedButtons.length > 0 && searchTerm === "") {
      // filled buttons and empty search bar
      tagInclusion
        ? item.classList.add("active")
        : item.classList.remove("active");
    }
    if (searchTerm !== "" && selectedButtons.length > 0) {
      // both search bar and buttons filled
      tagInclusion && titleInclusion
        ? item.classList.add("active")
        : item.classList.remove("active");
    }
  });
}

function filterReset() {
  selectedButtons.forEach((buttonClass) => {
    buttons[buttonClass].classList.remove("active");
  });
  selectedButtons.length = 0;
  searchInput.value = "";
  searchTerm = "";
  filterItems();
}

Object.values(buttons).forEach((button) => {
  button.addEventListener("click", handleClick);
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.toLowerCase().trim();
  filterItems();
});

resetBtn.addEventListener("click", () => filterReset());

filterItems();
