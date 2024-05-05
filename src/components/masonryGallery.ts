import { masonaryGallery } from "../constants/data";

const galleryContainer =
  document.querySelector<HTMLDivElement>(".hero__masonary")!;

export const renderMasnoryGallery = () => {
  const galleryItemList = masonaryGallery
    .map((item) => {
      return `<div class="hero__image__box">
              <img src=${item.imagePath} alt=${item.name} />
            </div>`;
    })
    .join(" ");

  galleryContainer.insertAdjacentHTML("afterbegin", galleryItemList);
};
