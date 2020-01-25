let button = document.querySelector('.motion-button__button');
let randomColor;

const motionButton = () => {
  let buttonPositionTop = Math.random() * 95;
  let buttonPositionLeft = Math.random() * 95;
  button.style.top = buttonPositionTop + '%';
  button.style.left = buttonPositionLeft + '%';
  getRandomColor();
}

const getRandomColor = () => {
  let r = Math.round(255 * Math.random());
  let g = Math.round(255 * Math.random());
  let b = Math.round(255 * Math.random());
  randomColor = `rgb(${r},${g},${b})`;
  button.style.background = randomColor;
}

button.addEventListener('click', motionButton);

