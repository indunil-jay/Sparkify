import { showAchievements } from "./components/dataupdater";
import { renderDesktopNavigation } from "./components/desktopnav";
import { handleHover, handleToggleClick } from "./components/header";
import { renderMasnoryGallery } from "./components/masonryGallery";
import { renderMobileNavigation } from "./components/mobilenav";
import { priceToggler, renderPriceCards } from "./components/priceCard";
import { renderTeamCards } from "./components/teamcards";

export const toggleOpenBtn = document.querySelector<HTMLButtonElement>(
  ".header__icon--menu"
)!;
export const toggleCloseBtn = document.querySelector<HTMLButtonElement>(
  ".header__icon--close"
)!;
export const headerParent = document.querySelector<HTMLElement>(".header")!;

const monlthybtn = document.querySelector(".month")!;
const yearlybtn = document.querySelector(".year")!;

//toggle mobile nav
toggleOpenBtn.addEventListener("click", handleToggleClick);
toggleCloseBtn.addEventListener("click", handleToggleClick);

//menu fade
headerParent.addEventListener("mouseover", (e: Event) => handleHover(e, 0.5));
headerParent.addEventListener("mouseout", (e: Event) => handleHover(e, 1));

//render navigation dynamically
renderMobileNavigation();
//render dekstop dynamically
renderDesktopNavigation();
//render masnory gallery in hero
renderMasnoryGallery();
//render team members cards
renderTeamCards();
//render price cards
renderPriceCards();

monlthybtn.addEventListener("click", async function () {
  monlthybtn.classList.add("pricing__toggle--active");
  yearlybtn.classList.remove("pricing__toggle--active");

  await priceToggler(1);
});

yearlybtn.addEventListener("click", async function () {
  monlthybtn.classList.remove("pricing__toggle--active");
  yearlybtn.classList.add("pricing__toggle--active");

  await priceToggler(12);
});

//clients number
showAchievements();
