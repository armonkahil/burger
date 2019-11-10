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
  console.log('new burger in controller', newBurger)
  burger.new(newBurger, function (result) {
    // Send back the ID of the new quote
    res.redirect('/')
  })
})

router.put('/api/burgers/:id', function (req, res) {
  var eaten = req.params.id
  console.log('burger devoured', eaten)
  burger.ate('burgers', eaten, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end()
    } else {
      res.redirect('/')
    }
  })
})

module.exports = router
