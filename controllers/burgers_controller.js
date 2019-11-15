// =============================================================================
// Dependencies
// =============================================================================
var express = require('express')
var router = express.Router()
var burger = require('../models/burger')

router.get('/', function (req, res) {
  burger.all(function (data) {
    var handlebarsOBj = {
      burgers: data
    }
    res.render('index', handlebarsOBj)
  }
  )
})

router.post('/api/burgers/:burger', function (req, res) {
  var newBurger = {
    burger_name: req.params.burger,
    devoured: false
  }
  burger.new(newBurger, function (result) {
    res.render('partials/burgers/burger-unblocked')
    
  })
})

router.put('/api/burgers/:id', function (req, res) {
  var eaten = req.params.id
  burger.ate('burgers', eaten, function (result) {
    console.table(result)
    res.render('partials/burgers/burger-unblocked')
  })
})

router.delete('/api/burgers/:name', function (req, res) {
  console.log(req.params.name)
  var name = req.params.name
  burger.delete('burgers', name, function (result) {
    console.table(result)
    res.render('partials/burgers/burger-unblocked')
  })
})

router.delete('/api/burgers/devoured/:name', function (req, res) {
  console.log(req.params.name)
  var name = req.params.name
  burger.delete('burgers', name, function (result) {
    console.table(result)
    res.render('partials/burgers/burger-block')
  })
})

module.exports = router
