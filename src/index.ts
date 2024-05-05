import { renderDesktopNavigation } from "./components/desktopnav";
import { handleHover, handleToggleClick } from "./components/header";
import { renderMasnoryGallery } from "./components/masonryGallery";
import { renderMobileNavigation } from "./components/mobilenav";

export const toggleOpenBtn = document.querySelector<HTMLButtonElement>(
  ".header__icon--menu"
)!;
export const toggleCloseBtn = document.querySelector<HTMLButtonElement>(
  ".header__icon--close"
)!;
export const headerParent = document.querySelector<HTMLElement>(".header")!;

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
