import { galleryItems } from './gallery-items.js';


const refs = {
  ulEl: document.querySelector(".gallery"),
};

function onEscClose(event) {
  if (event.code !== "Escape") {
    return;
  }

  modal.close();
}

const imgEl = galleryItems
  .map(({ preview, original, description}) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `)
  .join("");


refs.ulEl.insertAdjacentHTML("afterbegin", imgEl);


const modal = basicLightbox.create(`
  <img
    src=""
    width="800"
    height="600"
    alt="${galleryItems.description}"
  />
`, {
  onShow: () => {
        document.addEventListener("keydown", onEscClose);
  },
  onClose: () => {
      document.removeEventListener("keydown", onEscClose);
  },
});

function onOpenModal(evt) {
  evt.preventDefault();
 if (evt.target.nodeName !== "IMG") return; 
  const source = evt.target.dataset.source;
  const image = modal.element().querySelector("img");
  image.src = source;
  modal.show();
}

refs.ulEl.addEventListener("click", onOpenModal);


console.log(galleryItems);
