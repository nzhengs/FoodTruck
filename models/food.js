const orm = require("../config/orm");

orm.selectAll("foods").then(function(value) {
    console.log(value);
  });
  
  orm.insertOne("foods", "food_name", "pie").then(function(value) {
    console.log(value);
  });
  