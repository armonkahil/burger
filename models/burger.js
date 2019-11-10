var orm = require('../config/orm')

var burger = {
  all: function (callback) {
    orm.selectAll('burgers', (res) => {
      callback(res)
    })
  },
  new: function (newBurger, cb) {
    orm.insertOne('burgers', newBurger, (res) => {
      cb(res)
    })
  },
  ate: function (tableSel, burger, cb) {
    orm.updateOne(tableSel, burger, true, function (res) {
      cb(res)
    })
  }
}

module.exports = burger
