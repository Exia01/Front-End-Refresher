const express = require('express')
const path = require('path')
const favicon = require('express-favicon')
const bodyParser = require('body-parser')
const PORT = 8000


const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
// views and static files
app.set('views', path.join(__dirname, '/client/public/views'))
app.use(express.static(path.join(__dirname, '/client/public/assets/css')))
app.use(express.static(path.join(__dirname, '/client/public/assets/js')))
// import controller
require('./server/config/routes')(app)





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })