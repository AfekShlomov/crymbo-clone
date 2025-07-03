const quotesCollection = document.getElementsByClassName(
  "quotes__quote-container"
);
const nextButton = document.getElementById("first-button");
const prevButton = document.getElementById("second-button");

if (!quotesCollection) {
  throw new Error("failed to find quotues elements");
}
if (!nextButton || !prevButton) {
  throw new Error("failed to find button element");
}
const quotes = Array.from(quotesCollection);

quotes.forEach((quote, i) => {
  quote.next = i === quotes.length - 1 ? 0 : i + 1;
  quote.prev = i === 0 ? quotes.length - 1 : i - 1;
});

let currentDisplayedQuote = 0;
let timer;

function resetTimer() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    handleCycle(true);
  }, 5000);
}

function handleCycle(forward) {
  if (forward) {
    currentDisplayedQuote = quotes[currentDisplayedQuote].next;
  }
  if (!forward) {
    currentDisplayedQuote = quotes[currentDisplayedQuote].prev;
  }
  showQuote();
}

function showQuote() {
  quotes.forEach((quote, index) => {
    index === currentDisplayedQuote
      ? quote.classList.add("visible")
      : quote.classList.remove("visible");
  });

  resetTimer();
}

nextButton.addEventListener("click", () => {
  handleCycle(true);
  resetTimer();
});
prevButton.addEventListener("click", () => {
  handleCycle(false);
  resetTimer();
});

showQuote();
resetTimer(true);
