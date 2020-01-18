
let firstRow = document.querySelector('.inputs__first');
let secondRow = document.querySelector('.inputs__second');
let firstRowValue = 0;
let secondRowValue = 0;
let resultRow = document.querySelector('.inputs__result');

const sumCounter = () => {
  firstRowValue = +firstRow.value;
  secondRowValue = +secondRow.value;

  if (!isNaN(firstRowValue) && !isNaN(secondRowValue)) {
    resultRow.innerHTML = firstRowValue + secondRowValue;
  }
}
