let comments = {}

comments.data = ["Hello!", "Bye!", "Red", "Blue"]
comments.print = function(){ 
    this.data.forEach(element => { //similar to self, refers to THIS specific instance
        console.log(element)
    });
}
comments.print()