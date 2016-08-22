//Back-End Business Logic//
function pingPong (userNumber){
  var results = [];
  for (var i=1; i<=userNumber; i++) {
      if ((i%15) === 0) {
        results.push ('ping-pong');
      } else if ((i%3) === 0) {
        results.push ('ping');
      } else if ((i%5) === 0) {
        results.push ('pong');
      } else {
        results.push (i);
      }
  }
  return results;
}
//Front-End User Interface Logic//
$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    $("li#list-item").remove();
    var userNumber = parseInt($("input#number").val());
    var input = pingPong(userNumber);
    results = input.join(" ");
    $("#result").append("<li id='list-item'>" + results + "</li>");
  });
});
