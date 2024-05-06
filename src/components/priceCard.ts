import { packages } from "../constants/data";

const monlthybtn = document.querySelector(".month")!;
monlthybtn.classList.add("pricing__toggle--active");

const priceCardContainer =
  document.querySelector<HTMLDivElement>(".pricing__cards")!;

let multiplyer: number = 1;

// Store references to nodes that need to be updated
const priceNodes: Node[] = [];

export const priceToggler = async (num: number) => {
  multiplyer = num;

  // Update only changed nodes
  updatePriceNodes();
};

const updatePriceNodes = () => {
  // Update the text content of each price node with the new multiplier
  priceNodes.forEach((node) => {
    const cardIndex = parseInt(
      (node as HTMLElement).getAttribute("data-card-index") || ""
    );
    if (!isNaN(cardIndex)) {
      const card = packages[cardIndex];
      const priceElement = (node as HTMLElement).querySelector(
        ".pricing__card__num"
      );
      if (priceElement) {
        priceElement.textContent = `$${(
          parseFloat(card.price) * multiplyer
        ).toFixed(2)}`;
      }
    }
  });
};

export const renderPriceCards = async () => {
  const priceCardslist = packages
    .map((card, index) => {
      return `<div class="pricing__card" data-card-index="${index}">
            <div class="pricing__card__header">
              <h3 class="heading--4">${card.title}</h3>
            </div>
            <div class="pricing__card__details">
              <div class="pricing__card__package">
                <span class="pricing__card__num"> $${(
                  parseFloat(card.price) * multiplyer
                ).toFixed(2)} </span>
                <span class="pricing__card__per paragraph--2">/per month</span>
              </div>
              <div class="pricing__card__data">
                <p class="pricing__card__text paragraph--2">${
                  card.requirement
                }</p>
              </div>
              <div class="pricing__card__data">
                <a href="#" class="btn--fill pricing__card__btn ${
                  card.btnColorClass && card.btnColorClass
                }">${card.btnText}</a>
              </div>
              <div class="pricing__card__data">
               ${card.options
                 .map(
                   (option) =>
                     `<p class="pricing__card__text paragraph--2">${option.name}</p>`
                 )
                 .join(" ")}
              </div>
              <div class="pricing__card__data">
                <p class="pricing__card__text paragraph--2">${
                  card.trailDuration
                }</p>
              </div>
            </div>
          </div>`;
    })
    .join(" ");

  priceCardContainer.insertAdjacentHTML("beforeend", priceCardslist);

  // Store references to the price nodes
  priceNodes.push(
    ...Array.from(priceCardContainer.querySelectorAll(".pricing__card"))
  );
};
