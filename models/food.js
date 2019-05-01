const orm = require("../config/orm");

const food = {
  all: function() {
    return orm.selectAll("foods");
  },
  create: function(name) {
    console.log(name);
    return orm.insertOne("foods", "food_name", name);
  },
  update: function(id, devour) {
    return orm.updateOne("foods", `devour=${devour}`, `id=${id}`);
  }
};

module.exports = food;
