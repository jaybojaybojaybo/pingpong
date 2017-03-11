$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var entry = $("#input").val();
    var allNums = [];

    for (var numbers = 1; numbers <= entry; numbers++) {
      allNums.push(numbers);
    }
    console.log(allNums);

    var newNums = allNums.map(function(newNum) {
      if (newNum % 3 === 0 && newNum % 5 === 0) {
        return "pingpong"
      } else if (newNum % 3 === 0) {
        return "ping"
      } else if (newNum % 5 === 0) {
        return "pong"
      } else {
        return newNum;
      }
    });

  $("#output").text(newNums);
  });
});
