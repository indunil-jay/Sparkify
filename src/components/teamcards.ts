import { teamCards } from "../constants/data";

const teamCardContainer =
  document.querySelector<HTMLDivElement>(".team__userCards")!;

export const renderTeamCards = () => {
  const cardlist = teamCards
    .map((card) => {
      return `
          <div class="team__usercard">
            <div class="team__picture">
              <img src=${card.imagePath} alt= "${card.username}-image" />
            </div>
            <span class="team__username">${card.username}</span>
            <span class="team__user__role">${card.userrole}</span>
          </div>`;
    })
    .join(" ");

  teamCardContainer.insertAdjacentHTML("beforeend", cardlist);
};
