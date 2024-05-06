import { testimonailCards } from "../constants/data";

const testimonialContainer = document.querySelector(".testimonial__slider")!;

export const renderTestimonialCards = () => {
  const testimonialCardsList = testimonailCards
    .map((card) => {
      return `<div class="testimonial__slide">
          <div class="testimonial__details">
            <h5 class="testimonial__header">${card.header}</h5>
            <blockquote class="testimonial__text">
              ${card.text}
            </blockquote>
            <address class="testimonial__author">
              <img src=${card.imagePath} alt="${card.username}-image" class="testimonial__photo" />
              <h6 class="testimonial__name">${card.username}</h6>
              <p class="testimonial__location">${card.location}</p>
            </address>
          </div>
        </div>`;
    })
    .join(" ");

  testimonialContainer.insertAdjacentHTML("beforeend", testimonialCardsList);
};
