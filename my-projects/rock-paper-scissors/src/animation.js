import { gamerImage, computerImage, controlButtons } from './variables'; 

export const animationStart = () => {
  gamerImage.classList.add('game__hands-animation');
  computerImage.classList.add('game__hands-animation');
}

export const animationEnd = () => {
  gamerImage.classList.remove('game__hands-animation');
  computerImage.classList.remove('game__hands-animation');
}

export const removeButtonShadow = () => {
  controlButtons.forEach(elem => {
    elem.classList.remove('game__button-shadow');
  });
}

export const reverseImage = () => {
  gamerImage.style.transform = 'scale(-1, 1)';
}