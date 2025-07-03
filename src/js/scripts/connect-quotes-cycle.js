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
  quote.nextQuote = i === quotes.length - 1 ? quotes[0] : quotes[i + 1];
  quote.prevQuote = i === 0 ? quotes[quotes.length - 1] : quotes[i - 1];
});

let currentDisplayedQuote = quotes[0];
let timer;

function resetTimer() {
  clearTimeout(timer);

  timer = setTimeout(() => {
    handleCycle(true);
  }, 5000);
}

function handleCycle(forward) {
  if (forward) {
    currentDisplayedQuote = currentDisplayedQuote.nextQuote;
  }
  if (!forward) {
    currentDisplayedQuote = currentDisplayedQuote.prevQuote;
  }

  showQuote();
}

function showQuote() {
  quotes.forEach((quote) => {
    if (quote === currentDisplayedQuote) {
      quote.classList.add("visible");
    }
    if (quote !== currentDisplayedQuote) {
      quote.classList.remove("visible");
    }
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
