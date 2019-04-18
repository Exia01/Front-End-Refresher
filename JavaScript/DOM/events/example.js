let h1 = document.querySelector("h1")
undefined
h1
<h1>​Welcome to MY DOM Demo​</h1>​
h1.addEventListener("click", function(){
    alert("h1 was clicked!")}
VM196:2 Uncaught SyntaxError: missing ) after argument list
h1.addEventListener("click", function(){
    alert("h1 was clicked!")})
undefined
h1.addEventListener("click", function(){
    h1.classList.add("big")}
VM420:2 Uncaught SyntaxError: missing ) after argument list
h1.addEventListener("click", function(){
    h1.classList.add("big")})
undefined
h1.addEventListener("click", function(){
    h1.classList.toggle("big")})
undefined
h1.addEventListener("click", function(){
    alert("h1 was clicked!")}
VM544:2 Uncaught SyntaxError: missing ) after argument list
h1.removeEventListener("click", function(){
    alert("h1 was clicked!")}
VM634:2 Uncaught SyntaxError: missing ) after argument list
h1.removeEventListener("click", function(){
    alert("h1 was clicked!")})
undefined
document.querySelector("ul").addEventListener("click", function(){
    console.log("ul clicked")})
undefined
VM822:2 ul clicked
VM822:2 ul clicked
VM822:2 ul clicked
VM822:2 ul clicked
let li = document.querySelectorAll("li)
VM868:1 Uncaught SyntaxError: Invalid or unexpected token
let li = document.querySelectorAll("li")
undefined
for(let l of li){
    l.addEventListener("click", function(){
        this.style.color = "pink"})
}
undefined
VM822:2 ul clicked
VM822:2 ul clicked
VM822:2 ul clicked
VM822:2 ul clicked
VM822:2 ul clicked
VM822:2 ul clicked
