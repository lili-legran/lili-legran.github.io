const caruselItemsContainer = document.querySelector('.carusel__items');
const caruselVisualContainer = document.querySelector('.carusel__container');
let caruselItems = document.querySelectorAll('.carusel__item');
const baseItemsLength = caruselItems.length;
const nextButton = document.querySelector('.carusel__next-button');
const prevButton = document.querySelector('.carusel__prev-button');

let caruselItemWidth = Math.round(caruselItems[0].clientWidth);
let currentLeft = 0;
let currentItem = caruselItems[0];
let currentIndex = 0;

const caruselNextMotion = () => {
  currentLeft -= caruselItemWidth;
  caruselItemsContainer.style.left = currentLeft + 'px';
  infinityNextMotion();
  currentIndex++;
}

const caruselPrevMotion = () => {
  if (currentIndex > 0) {
    currentLeft += caruselItemWidth;
    caruselItemsContainer.style.left = currentLeft + 'px';
    currentIndex--;
  } else {
    infinityPrevMotion();
  }
}

const infinityNextMotion = () => {
  let cloneItem = caruselItems[currentIndex].cloneNode(true);
  caruselItemsContainer.appendChild(cloneItem);
  caruselItems = document.querySelectorAll('.carusel__item');
}
const infinityPrevMotion = () => {
  let cloneItem = caruselItems[currentIndex + baseItemsLength - 1].cloneNode(true);
  caruselItemsContainer.insertBefore(cloneItem, caruselItems[currentIndex]);
  caruselItems = document.querySelectorAll('.carusel__item');
}

nextButton.addEventListener('click', caruselNextMotion);
prevButton.addEventListener('click', caruselPrevMotion);
let automaticMotion = setInterval(caruselNextMotion, 4000);

caruselVisualContainer.onmouseout = function continueMotion() {
    automaticMotion = setInterval(caruselNextMotion, 4000);
}

caruselVisualContainer.onmouseover = function stopMotion() {
    clearInterval(automaticMotion); 
}




