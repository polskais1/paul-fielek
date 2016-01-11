$(function() {
  var $projects = $(".project");
  var $slides = $(".slide");

  var toggleArrows = function($selected, direction) {
    if (direction === "next") {
      if ($slides[$slides.length - 1] === $selected.next()[0]) {
        $("#next-slide").toggle();
      }

      if ($slides[0] === $selected[0]) {
        $("#prev-slide").toggle();
      }

    } else {
      if ($slides[$slides.length - 2] === $selected.prev()[0]) {
        $("#next-slide").toggle();
      }

      if ($slides[0] === $selected.prev()[0]) {
        $("#prev-slide").toggle();
      }
    }
  }

  $("#next-slide").click(function(event) {
    var $selected = $(".slide.selected");
    $selected.next().addClass("selected");
    $selected.removeClass("selected");

    toggleArrows($selected, "next");
  });

  $("#prev-slide").click(function(event) {
    var $selected = $(".slide.selected");
    $selected.prev().addClass("selected");
    $selected.removeClass("selected");

    toggleArrows($selected, "prev");
  });

});
