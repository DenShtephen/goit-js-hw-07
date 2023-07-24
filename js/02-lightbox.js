import { galleryItems } from './gallery-items.js';

const refs = {
  ulEl: document.querySelector(".gallery"),
};

const imgEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>
`
)
    .join("");


    console.log(galleryItems);