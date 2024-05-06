import { showAchievements } from "./components/dataupdater";
import { renderDesktopNavigation } from "./components/desktopnav";
import { handleHover, handleToggleClick } from "./components/header";
import { renderMasnoryGallery } from "./components/masonryGallery";
import { renderMobileNavigation } from "./components/mobilenav";
import { priceToggler, renderPriceCards } from "./components/priceCard";
import { renderTeamCards } from "./components/teamcards";
import { renderTestimonialCards } from "./components/testimonialCards";

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
//render testimonial cards
renderTestimonialCards();

//toggle price
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

//testimonial slider

const slides = document.querySelectorAll(".testimonial__slide")!;
const btnLeft = document.querySelector(".slider__btn--left")!;
const btnRight = document.querySelector(".slider__btn--right")!;
let currentSlide = 0;

const maxSlide = slides.length - 1;

//implementing slider dots
const dotContaier = document.querySelector(".dots")!;

const createDots = function () {
  slides.forEach((_, i) => {
    dotContaier.insertAdjacentHTML(
      "beforeend",
      `<button class ="dots__dot" data-slide="${i}" aria-label="slider-dot-${i}"></button>`
    );
  });
};

createDots();

const activateDot = function (slide: number) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)!
    .classList.add("dots__dot--active");
};

activateDot(0);

const goToSlide = function (slide: number) {
  slides.forEach(
    (s, i) =>
      ((s as HTMLElement).style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;

    // slides.forEach(
    //   (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
    // );
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

goToSlide(0);

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContaier.addEventListener("click", function (e) {
  if ((e.target as HTMLElement).classList.contains("dots__dot")) {
    const slide = (e.target as HTMLElement).dataset.slide;
    //@ts-ignore
    goToSlide(slide);
    //@ts-ignore
    activateDot(slide);
  }
});
