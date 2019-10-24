





$(document).ready(function() {
  $("form#vote").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());

    if (age >= 18 && age<100) {
      $(".over18").show();
    } else if(age < 18){
    $(".under18").show();
  } else {
    $(".enterNumber").show();
     }


});
});
