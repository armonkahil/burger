const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers_controller')
var app = express()

var PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(routes)

app.listen(PORT, function () {
  console.log('App listening on http://localhost:' + PORT)
})
