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
        console.log(name);
        return orm.insertOne("foods", "food_name", name);
    },
    update: function(id,devour){
        return orm.updateOne("foods",`devour=${devour}`,`id=${id}`)
    }
}


module.exports = food