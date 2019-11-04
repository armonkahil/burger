const express = require('express')
const exphbs =  require('express-handlebars')

var app = express()

var PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
