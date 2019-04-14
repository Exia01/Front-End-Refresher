function printReverse() {
  let arr = [1, 2, 3, 4];
  arr.reverse().forEach(num => {
    console.log(num);
  });
}
printReverse();

function isUniform() {
  let arr1 = [1, 1, 1, 1, 1];
  let arr2 = [1, 1, 1, 2, 1];
  let arr3 = [2, 2, 2, 2, 1, 1];
  //Will cycle every value and check
  console.log(arr1.every(v => v === arr1[0]));
  console.log(
    arr2.every(v => {
      v === arr2[0];
    })
  );

  function check(element, index, array) {
    return element === array[0];
  }
  console.log(arr3.every(check));
}
isUniform();


// Random Example
function print(variable) {
    console.log(variable)
}
let colors = ["red", "orange", "black", "blue", "green"]
function forEach(arr, func) {
    for (index in arr) {
        func(arr[index])
    }
}
forEach(colors, print)