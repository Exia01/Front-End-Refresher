let colors = ["red", "orange", "yellow"]
 /* Adding/Removing to the end of an array */
colors.push("green")// adds it to the end
console.log(colors)
console.log(colors.pop()) //removes the last item and pops it
console.log(colors)


/* Add/Remove to the beginning of the array */
let col = colors.shift()//removes it to the beginning
console.log(col)
colors.unshift("Hello")
console.log(colors)

/* Find the index of an item in an array */
let friends = ["Jose", "John","Jose",["Melissa", "Samuel"]]
console.log(friends.indexOf("Samuel"))//Wont find it thus -1
console.log(friends[3].indexOf("Samuel"))
console.log(friends.indexOf("Jose"))


/* Using slice to copy parts of an array  */

let fruits = ["Banana", "Apple", "Pineapple"]
let random = ["Banana", "Apple", "Pineapple", ["red", "orange", "yellow"]]
let other = fruits.slice(1, 2)
console.log(random.slice()) //Copies the whole thing