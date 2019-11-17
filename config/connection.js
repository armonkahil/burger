require('dotenv').config()
const keys = require('../keys.js')
const gateKeys = keys.mysql_db
const mysql = require('mysql')
const chalk = require('chalk')
const normal = chalk.hex('#F58148')
var connection

// if JawsDB exist...
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: gateKeys.id,
    password: gateKeys.key,
    database: 'burgers_db'
  })
}

// mySql
connection.connect(function (err) {
  if (err) {
    console.error(normal('error connecting: ' + err.stack))
    return
  }
  console.log(normal('connected as id ' + connection.threadId))
})

module.exports = connection
