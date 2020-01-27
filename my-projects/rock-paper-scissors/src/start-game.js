import {
  buttonPlay,
  rockButton,
  paperButton,
  scissorsButton
} from './variables';

import { enablePlayButton } from './enabling-disabling';

import {
  showRockImage,
  showScissorsImage,
  showPaperImage,
  play
} from './main-logic';

const startGame = () => {
  rockButton.addEventListener('click', showRockImage);
  scissorsButton.addEventListener('click', showScissorsImage);
  paperButton.addEventListener('click', showPaperImage);
  buttonPlay.addEventListener('click', play);
  enablePlayButton();
}

export default startGame;