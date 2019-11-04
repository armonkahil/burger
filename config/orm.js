var connection = require('../config/connection')

var Orm = {
  selectAll: function () {
    var newQuery = 'SELECT * FROM burgers'
    connection.query(newQuery, function (err, result) {
      if (err) throw err
      console.table(result)
    })
  },
  insertOne: function () {

  },
  updateOne: function () {

  }
}

module.exports = Orm
