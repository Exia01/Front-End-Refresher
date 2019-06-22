console.log(this) // {}

function whatIsThis() {
    console.log(this)
    return this

}
whatIsThis()


//Value of this is the the closet declare object