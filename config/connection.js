const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "foodtruck"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected :" + connection.threadId);
});

module.exports = connection;
