let p = document.getElementsByTagName("p")[0]
undefined
p
<p>​"Corgi mixes are "<strong>​super​</strong>​" adorable"</p>​
p.textContent
"Corgi mixes are super adorable"
let ul = document.querySelector("ul")
undefined
ul.textContent
"
		Orchids
		Succulents
		Tulips
	"
ul.innerHTML
"
		<li>Orchids</li>
		<li>Succulents</li>
		<li>Tulips</li>
	"
p.innerHTML
"Corgi mixes are <strong>super</strong> adorable"
document.querySelector("h1").innerHTML = "GoodBye!"
"GoodBye!"
document.querySelector("h1").innerHTML = <h1>Bye!<strong>!!!</strong>!!</h1>
VM616:1 Uncaught SyntaxError: Unexpected token <
