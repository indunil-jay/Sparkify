import { packages } from "../constants/data";

const priceCardContainer =
  document.querySelector<HTMLDivElement>(".pricing__cards")!;

export const renderPriceCards = () => {
  const priceCardslist = packages
    .map((card) => {
      return `<div class="pricing__card">
            <div class="pricing__card__header">
              <h3 class="heading--4">${card.title}</h3>
            </div>
            <div class="pricing__card__details">
              <div class="pricing__card__package">
                <span class="pricing__card__num">${card.price}</span>
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
};
