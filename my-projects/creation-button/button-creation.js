const buttonCreator = document.querySelector('.button__creator');
const createdButtonsContainer = document.querySelector('.created-buttons');
const buttonClear = document.querySelector('.button__clear');
const buttonFill = document.querySelector('.button__fill');
const COLORS = [
  'red', 'blue', 'green', 'grey', 'yellow', 'purple', 'aqua', 'cornflowerblue', 'coral', 'fuchsia'
];

const createNewButton = () => {
  let buttonProps = new ButtonProps();
  let newButton = document.createElement('button');
  newButton.classList.add('button__result');
  const updatedButton = setNewButtonProps(newButton, buttonProps);
  createdButtonsContainer.appendChild(updatedButton);
  buttonClear.addEventListener('click', clearButtonProps);
}

const inputs = {
  width: document.querySelector('.buttons-props__width'),
  height: document.querySelector('.buttons-props__height'),
  color: document.querySelector('.buttons-props__color'),
  background: document.querySelector('.buttons-props__background')
}

function ButtonProps() {
  this.width = inputs.width.value + 'px';
  this.height = inputs.height.value + 'px';
  this.color = inputs.color.value;
  this.background = inputs.background.value;
}

const setNewButtonProps = (newButton, props) => {
  newButton.style.width = props.width;
  newButton.style.height = props.height;
  newButton.style.color = props.color;
  newButton.style.background = props.background;
  newButton.innerText = 'BUTTON';
  return newButton;
}

const clearButtonProps = () => {
  inputs.width.value = '';
  inputs.height.value = '';
  inputs.color.value = '';
  inputs.background.value = '';
};

const generateRandomValue = (value = 0) => {
  return 40 + value + Math.floor(Math.random() * 100);  
}

const generateRandomColor = (color) => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * COLORS.length);
  } while (COLORS[randomIndex] === color)
  return COLORS[randomIndex];
}

const fillRandomButtonProps = () => {
  inputs.width.value = generateRandomValue(60);
  inputs.height.value = generateRandomValue();
  inputs.color.value = generateRandomColor();
  inputs.background.value = generateRandomColor(inputs.color.value);
}

buttonCreator.addEventListener('click', createNewButton);
buttonFill.addEventListener('click', fillRandomButtonProps);