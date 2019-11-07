var connection = require('../config/connection')

var Orm = {
  selectAll: function (tableSel) {
    const newQuery = 'SELECT * FROM ??'
    connection.query(newQuery,[tableSel], function (err, result) {
      if (err) throw err
      console.table(result)
    })
  },
  insertOne: function () {
    const newQuery = 'INSERT INTO burgers VALUES (?)'
    connection.query(newQuery, [req.body.burger], function (err, result) {
      if (err) {
        return result.status(500).end()
      }
    })
  },
  updateOne: function () {

  },
  deleteOne: function () {
    const queryString
  }
}

module.exports = Orm
