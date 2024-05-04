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
