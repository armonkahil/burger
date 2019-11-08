var orm = require('../config/orm')

var burger = {
  all: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res)
    })
  }
}

module.exports = burger
