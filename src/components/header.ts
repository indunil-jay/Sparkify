import { toggleCloseBtn, toggleOpenBtn } from "..";

const mobileNavigation =
  document.querySelector<HTMLElement>(".mobile__header")!;

//mobileNavigation
const toggleMobileNavigation = () => {
  toggleOpenBtn.classList.remove("header__icon--menu--active");
  toggleOpenBtn.classList.add("header__icon--menu--hidden");
  toggleCloseBtn.classList.remove("header__icon--close--hidden");
  toggleCloseBtn.classList.add("header__icon--close--active");
  mobileNavigation.dataset.expanded = "true";
};

const closeMobileNavigation = () => {
  toggleCloseBtn.classList.remove("header__icon--close--active");
  toggleCloseBtn.classList.add("header__icon--close--hidden");
  toggleOpenBtn.classList.remove("header__icon--menu--hidden");
  toggleOpenBtn.classList.add("header__icon--menu--active");
  mobileNavigation.dataset.expanded = "false";
};

export const handleToggleClick = () => {
  const mobileNavigationExpanded =
    document.querySelector<HTMLElement>(".mobile__header")!.dataset.expanded ===
    "true";
  if (mobileNavigationExpanded) {
    closeMobileNavigation();
  } else {
    toggleMobileNavigation();
  }
};

//header menu fade out
export const handleHover = (e: Event, opacity: number) => {
  if ((e.target as HTMLElement).classList.contains("header__link")) {
    const link = e.target as HTMLElement;
    const siblings = link.closest(".header")!.querySelectorAll(".header__link");
    const header = link.closest(".header") as HTMLElement;
    const logo = header.querySelector(".header__left")! as HTMLElement;
    const btns = header.querySelector(".header__right")! as HTMLElement;

    siblings.forEach((el) => {
      const sibling = el as HTMLElement;
      if (sibling !== link) sibling.style.opacity = opacity.toString();
    });
    logo.style.opacity = opacity.toString();
    btns.style.opacity = opacity.toString();
  }
};
