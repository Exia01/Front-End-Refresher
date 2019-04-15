// we could create a variable like the following
let person = ['Cindy', 32, 'Kentucky'];
//not conducive to extract the detail
console.log(person[2]);

//we can instead create an object / dictionary
example = {}
example2 = new Object();
let person_2 = {
  name: 'Cindy',
  age: 32,
    city: 'Kentucky',
  toDelete:"Random"
};
console.log(person_2['city'])

//Updating data
person_2.city = "Los angeles"
person_2["age"] += 1
console.log(person_2)

//Deleting
delete person_2.toDelete
console.log(person_2)