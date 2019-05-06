average = arr => {
  let tempSum = 0;
  for (let num of arr) {
    tempSum += num;
  }
  return Math.round(tempSum / arr.length);
};

console.log(average([90, 98, 89, 100, 100, 86, 94])); //94
console.log(average([40, 65, 77, 83, 80, 54, 73, 63, 95, 49])); //68
