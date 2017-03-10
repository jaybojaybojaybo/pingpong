$(document).ready(function() {

  $(document).submit(function(event) {
    var entry = $("#input").val();
    event.preventDefault();

    var allNum = [];
    for (var numbers = 0; numbers <= entry; numbers++) {
      allNum.push(numbers);
    }
    // 
    // allNum.forEach(integer) {
    //   if (integer % 3 && integer % 5) {
    //     replace(integer, "pingpong")
    //   }
    // }

  $("#output").text(allNum);
  });
});
