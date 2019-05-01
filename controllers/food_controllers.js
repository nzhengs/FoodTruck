const express = require("express");

const router = express.Router();

var food = require("../models/food");

router.get("/", function(request, response) {
  food.all().then(function(foods) {
    console.log(foods);
    const hbsObject = {
      foods: foods
    };
    response.render("index", hbsObject);
  });
});

router.get("/api/foods", function(request, response) {
  food.all().then(function(foods) {
    console.log(foods);
    response.json(foods);
  });
});

router.post("/api/foods", function(request, response) {
  console.log(request.body.name);
  food.create(request.body.name).then(function(food) {
    response.json(food);
  });
});

router.put("/api/foods/:id", function(request, response) {
  const id =request.params.id;
  food.update(id,request.body.devour).then(function(food) {
    response.json(food);
  });
});

module.exports = router;
