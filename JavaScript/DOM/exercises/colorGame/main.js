colors = generateRandomColors(6);
let pickedColor = pickColor();
let squares = document.querySelectorAll('.square'); //all squares
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easy-btn');
let hardBtn = document.querySelector('#hard-btn');
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener('click', function() {
  messageDisplay.textContent = '';
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let idx = 0; idx < squares.length; idx++) {
    // is there a color in array
    if (colors[idx]) {
      squares[idx].style.backgroundColor = colors[idx];
    } else {
      squares[idx].style.display = 'none';
    }
  }
});

//hard button
hardBtn.addEventListener('click', function() {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  messageDisplay.textContent = '';
});

//reset button
resetButton.addEventListener('click', function() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let idx = 0; idx < squares.length; idx++) {
    squares[idx].style.backgroundColor = colors[idx];
  }
  resetButton.textContent = 'New Colors';
  h1.style.backgroundColor = '#232323';
  messageDisplay.textContent = '';
});

//squares
for (let idx = 0; idx < squares.length; idx++) {
  //add click listener
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
  //add backgroundColor color
  squares[idx].style.backgroundColor = colors[idx];
}

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
