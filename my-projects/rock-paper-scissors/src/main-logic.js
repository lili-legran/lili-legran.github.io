import {
  rockButton,
  paperButton,
  scissorsButton,
  gamerImage,
  computerImage,
  resultText,
  rock,
  scissors,
  paper,
  items,
  computerCounterContainer,
  gamerCounterContainer
} from './variables';

import {
  animationStart,
  animationEnd,
  removeButtonShadow,
  reverseImage
} from './animation';

import {
  dissabledButtons, 
  enableButtons 
} from './enabling-disabling';

import { updateResultText } from './helpers';

let gamerChoice;
let computerChoice;
let gamerCounter = 0;
let computerCounter = 0;

export const showRockImage = () => {
  gamerChoice = rock;
  removeButtonShadow();
  rockButton.classList.add('game__button-shadow');
}

export const showScissorsImage = () => {
  gamerChoice = scissors;
  removeButtonShadow();
  scissorsButton.classList.add('game__button-shadow');
}

export const showPaperImage = () => {
  gamerChoice = paper;
  removeButtonShadow();
  paperButton.classList.add('game__button-shadow');
}

const showComputerChoice = () => {
  computerChoice = items[Math.floor(Math.random() * 3)];   
  computerImage.style.backgroundImage = 'url(' + computerChoice + ')';
}

const showGamerChoice = () => {
  gamerImage.style.backgroundImage = 'url(' + gamerChoice + ')';
  reverseImage(); 
}

const getResult = () => {
  if (gamerChoice == rock && computerChoice == scissors 
    || gamerChoice == scissors && computerChoice == paper
    || gamerChoice == paper && computerChoice == rock ) {
      resultText.innerText = 'YOU WIN!';
      gamerCounter++;
      computerCounterContainer.innerText = gamerCounter;
  } else if (gamerChoice == rock && computerChoice == paper
    || gamerChoice == scissors && computerChoice == rock
    || gamerChoice == paper && computerChoice == scissors) {
      resultText.innerText = 'YOU LOSE!';
      computerCounter++;
      gamerCounterContainer.innerText = computerCounter;
  } else {
    resultText.innerText = 'TIE!';
  }
  enableButtons();
}

const showResult = () => {
  animationEnd();
  showComputerChoice();
  showGamerChoice();
  removeButtonShadow();
  getResult();
}

export const play = () => {
  updateResultText();
  dissabledButtons();
  animationStart();
  setTimeout(showResult, 2000);  
};