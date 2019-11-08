var express = require('express')
var burger = require('../models/burger')

var router = express.Router()

router.get('/', function (req, res) {
  burger.all(function (data) {
    var handlebarsOBj = {
      burgers: data
    }
    console.log(data)
    res.render('index', handlebarsOBj)
  }
  )
})
module.exports = router
