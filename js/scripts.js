var allNums = [];

function writeNums(entry) {
  for (var numbers = 1; numbers <= entry; numbers++) {
    allNums.push(numbers);
  }
}

tableTennis = function(newNum) {
    if (newNum % 3 === 0 && newNum % 5 === 0) {
      return "pingpong"
    } else if (newNum % 3 === 0) {
      return "ping"
    } else if (newNum % 5 === 0) {
      return "pong"
    } else {
      return newNum;
    }
}

$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    var entry = $("#input").val();

    writeNums(entry);

    var newNums = allNums.map(tableTennis);

    newNums.forEach(function(newNum) {
      $("ul").append("<li>" + newNum + "</li>")
    });

    $("#output").show();
    $("form#userNumber").trigger('reset');
  });
});
