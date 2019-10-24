





$(document).ready(function() {
  $("form#vote").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
      $(".over18").show();
    
});
});
