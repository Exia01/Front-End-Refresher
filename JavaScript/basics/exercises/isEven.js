/* Write a functions isEven() which takes a single number argument and returns true if the number is even, and false otherwise */

function isEven(num) {
    let result = (num % 2 == 0) ? true : false;
    return result
}


function is_isEven(num) {
    return num % 2 === 0
}
//Test Cases
console.log(isEven(4))
console.log(isEven(21))
console.log(isEven(68))


