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

//smooth scrooling
document
  .querySelector(".header__navigations")!
  .addEventListener("click", function (e: Event) {
    e.preventDefault();

    if ((e.target as HTMLElement)?.classList.contains("header__link")) {
      const id = (e.target as HTMLElement)?.getAttribute("href")!;

      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  });

//Theme toggle
// Retrieve theme from localStorage or default to "light"

let theme = localStorage.getItem("theme") || "light";
const htmlElement = document.querySelector("html")!;

// Set the initial theme
htmlElement.setAttribute("data-theme", theme);

// Update the theme toggle based on the current theme
const themeToggle = document.querySelector(".theme__icon")!;

// Toggle icon visibility function
function toggleIconVisibility() {
  const sunIcon = document.querySelector(".header__icon--sun")! as HTMLElement;
  const moonIcon = document.querySelector(
    ".header__icon--moon"
  )! as HTMLElement;

  if (theme === "light") {
    sunIcon.classList.add("header__icon--sun--hidden");
    sunIcon.classList.remove("header__icon--sun--active");
    moonIcon.classList.remove("header__icon--moon--hidden");
    moonIcon.classList.add("header__icon--moon--active");
  } else {
    sunIcon.classList.remove("header__icon--sun--hidden");
    sunIcon.classList.add("header__icon--sun--active");
    moonIcon.classList.remove("header__icon--moon--active");
    moonIcon.classList.add("header__icon--moon--hidden");
  }
}
// Set initial icon visibility
toggleIconVisibility();

// Event listener for theme toggle
themeToggle.addEventListener("click", function () {
  // Toggle the theme
  theme = theme === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Toggle icon visibility
  toggleIconVisibility();
});

//sticky navigation
const header = document.querySelector(".header__block")!;
const nav = document.querySelector(".header")!;
const navHeight = nav.getBoundingClientRect().height;

//@ts-ignore
const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

////////////////////////Revealing Elements/////////////////////////////////
const allSection = document.querySelectorAll(".section")!;
//@ts-ignore
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
