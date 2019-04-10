//create secretNumber
let secretNumber = Math.floor(Math.random()*10)

//ask user for guess
while (true) {
  let stringGuess = prompt('Guess a number');
  let guess = Number(stringGuess);

  //check if guess is right
  if (guess === secretNumber) {
	  alert('YOU GOT IT RIGHT!');
	  break
  }
  //check if guess is higher
  else if (guess > secretNumber) {
    alert('Too high.  Guess again!');
  } else {
    alert('Too low.  Guess again!');
  }
  //otherwise, check if lower
}
