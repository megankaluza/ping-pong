//Business Logic//
var letters = ["Ping", "Pong" , "Ping-pong"];

var pingPong = function(number){
  var results = [];
  var inputNumber = 1;

  for (i=1; i<=number; i++) {
    results.push(inputNumber);
    inputNumber ++;
  //  alert(inputNumber);
    results.forEach(function(number){
    if (number%15 === 0) {
      number[i] = letters[0];
    } else if (number%3 === 0) {
      number[i] = letters[1];
    } else if (number%5 === 0) {
      number[i] = letters[2];
    } else {
      return number;
    };
  });
};
  return results;
};
//User Interface Logic//
$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $("#result").append("<li>" + result + "</li>");
    //$("#result").text(result);

  });
});
