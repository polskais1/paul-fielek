$(function() {
  repositionName();

  $(window).scroll(function(e) {
    repositionName();
  });

  function repositionName() {
    $name = $('#name');
    // Center the name
    $name.css('bottom', ($(document).height() / 2) - ($name.height() / 2));
  }
});
