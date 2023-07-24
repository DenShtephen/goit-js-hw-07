import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery');

const imgEl = galleryItems
  .map(({ preview, original, description }) => { 
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join('');

galleryList.insertAdjacentHTML("beforeend",imgEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  animationSpeed: 250,
});