// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const photoRfs = document.querySelector(".gallery");

  const result = galleryItems
    .map(({ preview, original, description }) => 
      `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg" >
    <img
      class="gallery__image"
      src= "${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
)
    .join("");

photoRfs.insertAdjacentHTML("beforeend", result);

let instance = null;

photoRfs.addEventListener('click', onEventClick);

function onEventClick(event) {
  event.preventDefault(); 
  if (event.target.tagName !== "IMG") {
    return
   }
  const preview = event.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${preview}" width="800" height="600">
`)
instance.show()
}
window.addEventListener('keydown', (event) => {
  if (event.code === "Escape") {
    instance?.close()
  }
  
})







