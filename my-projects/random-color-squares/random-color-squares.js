const squaresBox = document.querySelector('.squares');
const squaresBoxWidth = squaresBox.clientWidth;
const squaresBoxHeight = squaresBox.clientHeight;

const setSquaresItems = () => {
  let squaresItemWidth = Math.floor(squaresBoxWidth / 12);
  let squaresItemHeight = squaresItemWidth; 
  let columns = Math.floor(squaresBoxWidth / squaresItemWidth);
  let rows = Math.floor(squaresBoxHeight / squaresItemHeight);
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.classList.add('squares__row');
    for (let j = 0; j < columns; j++) {
      let squaresItem = document.createElement('div');
      squaresItem.classList.add('squares__item');
      squaresItem.style.width = squaresItemWidth + 'px';
      squaresItem.style.height = squaresItemHeight + 'px';
      row.appendChild(squaresItem);

      squaresItem.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomColor();
        this.classList.add('squares__shadow');
      });
      squaresItem.addEventListener('mouseout', function() {
        this.classList.remove('squares__shadow');
      });
    }
    squaresBox.appendChild(row);
  }
}

const getRandomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

setSquaresItems();

