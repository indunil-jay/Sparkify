//  toggle mobile navigation
const toggleCloseBtn = document.querySelector<HTMLButtonElement>(
  ".header__icon--close"
)!;
const toggleOpenBtn = document.querySelector<HTMLButtonElement>(
  ".header__icon--menu"
)!;

const mobileNavigation =
  document.querySelector<HTMLElement>(".mobile__header")!;

toggleOpenBtn.addEventListener("click", () => {
  toggleOpenBtn.classList.remove("header__icon--menu--active");
  toggleOpenBtn.classList.add("header__icon--menu--hidden");
  toggleCloseBtn.classList.remove("header__icon--close--hidden");
  toggleCloseBtn.classList.add("header__icon--close--active");
  mobileNavigation.dataset.expanded = "true";
});
toggleCloseBtn.addEventListener("click", () => {
  toggleCloseBtn.classList.remove("header__icon--close--active");
  toggleCloseBtn.classList.add("header__icon--close--hidden");
  toggleOpenBtn.classList.remove("header__icon--menu--hidden");
  toggleOpenBtn.classList.add("header__icon--menu--active");
  mobileNavigation.dataset.expanded = "false";
});

//menu fade when hover item.
const headerParent = document.querySelector<HTMLHeadElement>(".header")!;

const handleHover = (e: Event, opacity: number) => {
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
headerParent.addEventListener("mouseover", (e: Event) => handleHover(e, 0.5));
headerParent.addEventListener("mouseout", (e: Event) => handleHover(e, 1));
