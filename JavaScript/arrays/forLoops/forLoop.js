//Basic
let colors = ["red", "blue", "White", "black"]
for (let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

// for of
for (let color of colors) {
    console.log(color)
}
// for of index 
for (let idx in colors) {
    console.log(idx)
}

//for each 
colors.forEach((color)=> {
    //color is a placeholder, can be named whatever
    console.log(color)
    console.log(`The current color is ${color}`)
})


["Hello", "world",1,2,3].forEach(function(el, i, arr) {
    console.log(el, i, arr); // element, index, whole array itself
  });