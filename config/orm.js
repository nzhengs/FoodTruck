const connection = require("./connection");

const orm = {
  selectAll: function(tableName) {
    const query = "SELECT * FROM " + tableName + ";";

   

    connection.query(query, function(err, result) {
        if(err) throw err;

    });

    return promise1;
  },
  insertOne: function() {},
  updateOne: function() {}
};
