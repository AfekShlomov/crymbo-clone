const valueCollection = document.getElementsByClassName("value__item");

if (!valueCollection) {
  throw new Error("cannot find value items");
}

const valueItems = Array.from(valueCollection);

valueItems.forEach((item, i) => {
  item.buttons = item.querySelectorAll(".value__buttons-container__button");
  item.next = i === valueItems.length - 1 ? 0 : i + 1;

  if (!item.buttons) {
    throw new Error("cannot find value buttons in " + i);
  }
  if (!item.next && item.next !== 0) {
    throw new Error("cannot find value next item in " + i);
  }
});

let currentDisplayedItem = 0;
let timer;

function resetTimer() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    handleCycle(valueItems[currentDisplayedItem].next);
  }, 5000);
}

function handleCycle(index) {
  currentDisplayedItem = index;

  showItem();
}

function showItem() {
  valueItems.forEach((item, index) => {
    index === currentDisplayedItem
      ? item.classList.add("visible")
      : item.classList.remove("visible");
  });

  resetTimer();
}

valueItems.forEach((item) => {
  item.buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      handleCycle(buttonIndex);
    });
  });
});

showItem();
resetTimer();
