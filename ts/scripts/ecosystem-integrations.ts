const buttons = {
  Oracle: document.querySelector(".Oracle") as HTMLButtonElement,
  Payment: document.querySelector(".Payment") as HTMLButtonElement,
  KYT: document.querySelector(".KYT") as HTMLButtonElement,
  Wallet: document.querySelector(".Wallet") as HTMLButtonElement,
  Custody: document.querySelector(".Custody") as HTMLButtonElement,
  Liquidity: document.querySelector(".Liquidity") as HTMLButtonElement,
};
const selectedButtons: string[] = [];

let searchTerm = "";
const searchInput = document.querySelector("#search-bar") as HTMLInputElement;
searchInput.addEventListener("input", (event) => {
  const input = event.target as HTMLInputElement;
  searchTerm = input.value.toLowerCase().trim();
  filterItems();
});

const resetBtn = document.querySelector(".Reset") as HTMLButtonElement;
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
  const target: HTMLElement = event.target;
  const classes: DOMTokenList = target.classList;

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

const items = document.querySelectorAll<HTMLDivElement>(
  ".dev-ecosystem-section .content-div > .item-div"
);

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
    const itemTag = item.querySelectorAll<HTMLParagraphElement>(".item-tag");
    const tagTexts = Array.from(itemTag).map((tag) =>
      tag.textContent!.trim().toLowerCase()
    );

    const itemHeader =
      item.querySelector<HTMLHeadingElement>("h3")!.textContent;
    const itemHeaderTrimmed = itemHeader!.toLowerCase().trim();

    const titleInclusion = itemHeaderTrimmed.includes(searchTerm);
    const tagInclusion = tagTexts.some((tag) =>
      selectedButtonsLowercase.includes(tag)
    );

    if (itemHeaderTrimmed !== "" && selectedButtons.length === 0) {
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

export {};
