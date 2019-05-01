const connection = require("./connection");

const orm = {
  selectAll: function(tableName) {
    const promise = new Promise(function(resolve, reject) {
      const query = "SELECT * FROM " + tableName + ";";
      connection.query(query, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  },
  insertOne: function(tableName, columnNames, values) {
    const promise = new Promise(function(resolve, reject) {
      const query = `INSERT INTO ${tableName} (${columnNames}) VALUES ("${values}") `;
      console.log(query);
      connection.query(query, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  },
  updateOne: function(tableName, value, condition) {
    const promise = new Promise(function(resolve, reject) {
      const query = `UPDATE ${tableName} SET ${value} WHERE ${condition} `;
      connection.query(query, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  }
};

module.exports = orm;
