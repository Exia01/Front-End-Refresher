// Write a function factorial() which takes in a single numeric argument and returns the factorial of that number

function factorial(number) {
    tempFactorial = number
    number--
  if (number == 0) return 1;
  for (; number > 0; number--) {
    tempFactorial = tempFactorial * number;
  }
  return tempFactorial;
}

// #Test Cases
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(5));
