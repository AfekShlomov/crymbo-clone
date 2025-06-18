const quotes = document.querySelectorAll<HTMLDivElement>(".quote-div");
let currentQuoteIndex = 0;

function showQuote(index) {
  quotes.forEach((quote, i) => {
    if (i === index) {
      quote.style.display = "flex";
      void quote.offsetWidth;
      quote.classList.add("visible");
    } else {
      quote.classList.remove("visible");
      setTimeout(() => {
        if (!quote.classList.contains("visible")) {
          quote.style.display = "none";
        }
      }, 250);
    }
  });
}

function handleCycle() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  showQuote(currentQuoteIndex);
}

function resetInterval() {
  clearInterval(quotesInterval);
  quotesInterval = setInterval(handleCycle, 5000);
}

showQuote(currentQuoteIndex);
let quotesInterval = setInterval(handleCycle, 5000);

const nextButton = document.querySelector(".first-button") as HTMLButtonElement;
const prevButton = document.querySelector(
  ".second-button"
) as HTMLButtonElement;

nextButton.addEventListener("click", () => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  showQuote(currentQuoteIndex);
  resetInterval();
});

prevButton.addEventListener("click", () => {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(currentQuoteIndex);
  resetInterval();
});

export {};
