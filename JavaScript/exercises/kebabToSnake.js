// Write a function kebabToSnake which takes a single kebab-cased string argument and returns the snake_cased version

function kebabToSnake(word) {
    if (typeof (word) == 'string') {
        return word.replace(/-/g, '_')
    }
}

//Test Cases
console.log(kebabToSnake("Hello-World", "-"))
console.log(("blah"))