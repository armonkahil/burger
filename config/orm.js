var connection = require('../config/connection')

var orm = {
  selectAll: (tableSel, callback) => {
    const newQuery = 'SELECT * FROM ??'
    connection.query(newQuery, [tableSel], function (err, result) {
      if (err) throw err
      console.table(result)
      callback(result)
    })
  },
  insertOne: (tableSel, newBurger) => {
    const newQuery = 'INSERT INTO ?? SET ??'
    connection.query(newQuery, [tableSel,
      {
        burger_name: newBurger.name,
        devoured: newBurger.status
      }], (err, result) => {
      if (err) {
        return result.status(500).end()
      }
      console.table(result)
    }).then()
  },
  updateOne: (tableSel, burger) => {
    const newQuery = 'UPDATE ?? SET ? WHERE ?'
    connection.query(newQuery, [
      tableSel,
      {
        devoured: burger.status

      },
      {
        burger_name: burger.name
      }], (err, result) => {
      if (err) {
        return result.status(500).end()
      }
      console.table(result)
    })
  }
}

module.exports = orm
