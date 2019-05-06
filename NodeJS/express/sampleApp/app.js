const express = require("express")
const app = express()//creates "instance" of express

app.get('/', (req,res) => { //request, response
    res.send("Hello there!")
})
app.get('/bye', (req,res) => { //request, response
    res.send("GoodBye!!")
})
app.get('/dog', (req,res) => { //request, response
    res.send("Meow!!")
})
//goorm ide app.listen(process.evn.PORT, process.env.IP)
app.listen(8000,()=> {
    console.log("Listening in port 8000")
}) 