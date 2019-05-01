$(function() {
  $("#addFood").click(function(event) {
    event.preventDefault();
    const newFood = {
      name: $("#foodInput")
        .val()
        .trim()
    };
    console.log(newFood);
    $.post("/api/foods", newFood, function(result) {
      console.log(result);
      location.reload();
    });
  });

  $(".eat").click(function(event) {
    event.preventDefault();
    const id = $(this).data("id");
    console.log(id)
    $.ajax(`/api/foods/${id}`, {
      type: "PUT",
      data: {
        devour: true
      }
    }).then(function(result) {
      console.log(result);
      location.reload();
    });
  });
});
