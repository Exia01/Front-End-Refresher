colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];
let pickedColor = colors[3];
let squares = document.querySelectorAll('.square'); //all squares
let colorDisplay = document.getElementById('color-display');

colorDisplay.textContent = pickedColor
for (let idx in squares) {
    //add backgroundColor color
    squares[idx].style.backgroundColor = colors[idx];
    //add click listener
    squares[idx].addEventListener("click", function () {
        //grab color of square and compare
        let clickedColor = this.style.backgroundColor
        if (clickedColor === pickedColor) {
            alert("Correct")
        } else {
            this.style.backgroundColor="#232323"
        }
    })
}
