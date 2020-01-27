import { buttonPlay, allButtons, controlButtons } from './variables'

export const enableButtonPlay = () => {
  buttonPlay.classList.add('game__button_enabled');
  buttonPlay.disabled = false;
  buttonPlay.classList.remove('game__button_disable');
};

export const dissabledButtons = () => {
  allButtons.forEach(el => {
    el.classList.add('game__button_disable');
    el.disabled = true;
  });
}

export const enableButtons = () => {
  controlButtons.forEach(el => {
    el.classList.remove('game__button_disable');
    el.disabled = false;
  });
}

export const enablePlayButton = () => {
  controlButtons.forEach(element => {
    return element.addEventListener('click', enableButtonPlay);
  });
} 