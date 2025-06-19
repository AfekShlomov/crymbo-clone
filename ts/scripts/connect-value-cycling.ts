import { dbItem } from "../types";

const db: { [key: number]: dbItem } = {
  0: {
    title: "Eliminiate Integrations",
    paragraph:
      "See the end of bilateral infrastructure integrations with Crymbo's unified API. Integrate once to build your complete digital assets stack across pre-trade, trade and post trade functions.",
    img: "/media/connect-value-1.png",
    button: "Request Demo",
    buttonClass: "value-button",
  },
  1: {
    title: "Become captial efficient",
    paragraph:
      "Stop missed trading opportunities, trade breaks and transaction signing with Crymbo Omniwallet solutions. Control your multiple and custody providers using a single dashboard and interface to enable wallet rebalancing, capital allocation and risk recognition.",
    img: "/media/connect-value-2.png",
    button: "Ready? Become capital efficient",
    buttonClass: "value-simple-button",
  },
  2: {
    title: "End manual work",
    paragraph:
      "Stop the reliance on spreadsheets, macros and staff to reconcile data across DeFi, CeFi and Tradfi business operations. With Crymbo, you can orchestrate data flows to risk and back office teams with ease.",
    img: "/media/connect-value-3.png",
    button: "Ready? End manual work",
    buttonClass: "value-simple-button",
  },
};

const valueSection = document.querySelector(".value-section") as HTMLElement;
const valueObj = {
  img: valueSection.querySelector(".img-div img") as HTMLImageElement,
  buttonsDiv:
    valueSection.querySelectorAll<HTMLHeadingElement>(".buttons-div h3"),
  para: valueSection.querySelector(".para-div p") as HTMLParagraphElement,
  button: valueSection.querySelector(".value-button") as HTMLButtonElement,
};

const fullValueSection = document.querySelector(
  ".full-value-section"
) as HTMLElement;
const fullValueObj = {
  img: fullValueSection.querySelector(".img-div img") as HTMLImageElement,
  buttonsDiv:
    fullValueSection.querySelectorAll<HTMLHeadingElement>(".buttons-div h3"),
  para: fullValueSection.querySelector(".para-div p") as HTMLParagraphElement,
  button: fullValueSection.querySelector(".value-button") as HTMLButtonElement,
};

let currentValueIndex = 0;

function showValue(index) {
  const dbItem: dbItem = db[index];
  if (!dbItem) return;

  fullValueObj.img.src = dbItem.img;
  valueObj.img.src = dbItem.img;

  fullValueObj.para.textContent = dbItem.paragraph;
  valueObj.para.textContent = dbItem.paragraph;

  fullValueObj.button.className = "";
  fullValueObj.button.classList.add(dbItem.buttonClass);
  valueObj.button.className = "";
  valueObj.button.classList.add(dbItem.buttonClass);

  fullValueObj.button.querySelector("#value-button-div div")!.textContent =
    dbItem.button;

  valueObj.button.querySelector("#value-button-div div")!.textContent =
    dbItem.button;

  fullValueObj.buttonsDiv.forEach((buttonItem, buttonIndex) => {
    buttonItem.className = "";
    if (dbItem.title === buttonItem.textContent) {
      buttonItem.classList.add("active");
    }
  });
  valueObj.buttonsDiv.forEach((buttonItem, buttonIndex) => {
    buttonItem.className = "";
    if (dbItem.title === buttonItem.textContent) {
      buttonItem.classList.add("active");
    }
  });
}

function handleCycle() {
  currentValueIndex = (currentValueIndex + 1) % Object.keys(db).length;
  showValue(currentValueIndex);
}
showValue(currentValueIndex);
let interval = setInterval(handleCycle, 5000);

fullValueObj.buttonsDiv.forEach((buttonItem, index) => {
  buttonItem.addEventListener("click", () => {
    showValue(index);
    currentValueIndex = index;
    clearInterval(interval);
    interval = setInterval(handleCycle, 5000);
  });
});

valueObj.buttonsDiv.forEach((buttonItem, index) => {
  buttonItem.addEventListener("click", () => {
    showValue(index);
    currentValueIndex = index;
    clearInterval(interval);
    interval = setInterval(handleCycle, 5000);
  });
});

export {};
