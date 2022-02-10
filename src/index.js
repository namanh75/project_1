const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db=require('./config/database')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
var methodOverride = require('method-override')
const app = express()


//morgan and public
app.use(morgan('combined'))

//public file
app.use(express.static(path.join(__dirname, 'public')))

//body parser
app.use(bodyParser.urlencoded({extended: true}))

//cookies
app.use(cookieParser())

//use other method
app.use(methodOverride('_method'))

//view engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname, 'resources/views'))

//connect db
db.connect()

//routing
route(app)

//set port listen
const port=6100

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})