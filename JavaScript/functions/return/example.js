//return a value and not undefined

function square(num) {
  return num * num;
}

console.log(square(2)); //4
console.log(square(3)); //9

// Declaration
function capitalize(str) {
  if (typeof str === 'number') {
    return "That's not a string";
  }
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

//Expression
const test = function capitalize(str) {
    if (typeof str === 'number') {
      return "That's not a string";
    }
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
  
console.log(capitalize('paris'));
console.log(test(4));

// A function expression is a function that is assigned to a variable
