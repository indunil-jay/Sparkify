import { navigation } from "../constants/data";

const headerNavigationContainer = document.querySelector<HTMLUListElement>(
  ".header__navigations"
)!;

export const renderDesktopNavigation = () => {
  const list = navigation
    .map((navItem) => {
      if (navItem.isMobile) return;
      return `
       <li class="header__nav">
          <a href=${navItem.url} class="header__link">${navItem.name}</a>
        </li>
        `;
    })
    .join(" ");

  headerNavigationContainer.insertAdjacentHTML("beforeend", list);
};
