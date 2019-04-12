// using set interval
function echo() {
    console.log("Echooo")
    console.log(".....Echoooo")
}

// setInterval(echo, 1000); // setInterval is calling the function no () needed
setInterval(() => {
    console.log("I am an annonimous function")
}, 2000,2)

