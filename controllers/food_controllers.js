const express = require("express");

const router = express.Router();

var food = require("../models/food");

router.get("/api/foods", function(request, response) {
  food.all().then(function(foods) {
    console.log(foods);
    response.json(foods);
  });
});

router.post("/api/foods", function(request, response) {
  food.create("food_name", request.body.name).then(function(food) {
    response.json(food);
  });
});

module.exports = router;
