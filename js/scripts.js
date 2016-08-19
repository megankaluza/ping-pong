//Business Logic//
var letters = ["Ping", "Pong" , "Ping-pong"];
var results;
var inputNumber;
var i;

var pingPong = function(userNumber){
  results = [];
  inputNumber = 1;
  for (i=1; i<=userNumber; i++) {
    results.push(inputNumber);
    inputNumber ++;
    results.forEach(function(number){
      if (number%15 === 0) {
        number[i] = letters[1];
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
    var userNumber = parseInt($("input#number").val());
    var input = pingPong(userNumber);
    results = results.join(" ");
      alert(results[3]);
    $("#result").append("<li>" + results + "</li>");
    //$("#result").text(result);
  });
});
