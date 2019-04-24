let numSquares = 6;
colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square'); //all squares
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');
init();
function init() {
  setUpModebuttons();
  setUpSquares();
  reset();
}
function setUpSquares() {
  //sets up squares colors and h1
  for (let idx = 0; idx < squares.length; idx++) {
    squares[idx].addEventListener('click', function() {
      //grab color of square and compare
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play again?';
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again!';
      }
    });
  }
}
function setUpModebuttons() {
  //set
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6); // using ternary
      reset();
    });
  }
}

function reset() {
  //takes in a num
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors'; //inside of the button itself
  messageDisplay.textContent = '';
  for (let idx = 0; idx < squares.length; idx++) {
    if (colors[idx]) {
      squares[idx].style.display = 'block';
      squares[idx].style.backgroundColor = colors[idx];
    } else squares[idx].style.display = 'none';
  }
  h1.style.backgroundColor = 'steelblue';
}


resetButton.addEventListener('click', function () {
  //calls reset function
  reset();
});

function changeColors(color) {
  //loops through all the squares, applies color
  for (let square of squares) {
    square.style.backgroundColor = color;
  }
}

function pickColor() {
  // pick color, inclusive of length
  let random = Math.floor(Math.random() * colors.length);
  // console.log(random)
  return colors[random];
}

function generateRandomColors(num) {
  //generates an array colors
  let array = [];
  i = 0;
  while (i < num) {
    array.push(randomColor());
    i++;
  }
  return array;
}

function randomColor() {
  /* pick 'red' from 0-255
    pick 'green' from 0-255
    pick 'blue' from 0-255 */
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
