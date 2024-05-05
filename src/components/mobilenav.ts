import { navigation } from "../constants/data";

const mobileNavigationContainer = document.querySelector<HTMLElement>(
  ".mobile__header__navigations"
)!;

export const renderMobileNavigation = () => {
  const navigationList = navigation
    .map((navItem) => {
      return `
    <li class="mobile__header__nav">
        <a href=${navItem.url} class="header__link">${navItem.name}</a>
    </li>
  `;
    })
    .join(" ");

  mobileNavigationContainer.insertAdjacentHTML("beforeend", navigationList);
};
