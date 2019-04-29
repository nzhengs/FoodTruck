const orm = require("../config/orm");

// orm.selectAll("foods").then(function(value) {
//     console.log(value);
//   });
  
//   orm.insertOne("foods", "food_name", "pie").then(function(value) {
//     console.log(value);
//   });

//   orm.updateOne("foods",{id: 2, foodName: "Pizza"})
  
const food = {
    all: function() {
        return orm.selectAll("foods");
    },
    create: function(name) {
        return orm.insertOne("foods", "food_name", name);
    },
    update: function(id,name){
        return orm.updateOne("foods","devour")
    }
}


module.exports = food