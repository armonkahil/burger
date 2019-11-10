var connection = require('../config/connection')

var orm = {
  selectAll: (tableSel, callback) => {
    const newQuery = 'SELECT * FROM ??'
    connection.query(newQuery, [tableSel], function (err, result) {
      if (err) throw err
      // console.table(result)
      callback(result)
    })
  },
  insertOne: (tableSel, newBurger, callback) => {
    const newQuery = 'INSERT INTO ' + tableSel + ' SET ?'
    connection.query(newQuery, [
      {
        burger_name: newBurger.burger_name,
        devoured: newBurger.devoured
      }], (err, result) => {
      if (err) throw err
      callback(result)
    })
  },
  updateOne: function (tableSelected, burger, status, callback) {
    const newQuery = 'UPDATE ' + tableSelected + ' SET ? WHERE ?'
    connection.query(newQuery, [
      {
        devoured: status

      },
      {
        burger_name: burger
      }], function (err, result) {
      if (err) throw err
      callback(result)
    })
  }
}

module.exports = orm
