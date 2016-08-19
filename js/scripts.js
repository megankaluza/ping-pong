//Business Logic//
var letters = ["Ping", "Pong" , "Ping-pong", "Nope!"];

var pingPong = function(number){
for (i=1; i<100; i++) {
  if (i%3 === 0 && i%5 !== 0) {
      console.log(letters[0]);
  } else if (i%5 === 0 && i%3 !== 0) {
      console.log(letters[1]);
  } else if (i%15 === 0 && !i%3 === 0) {
      console.log(letters[2]);
  } else {
      console.log(letters[3]);
  };
};
};
//User Interface Logic//
$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $("#result").text(letters[0]);
      if (i%3 === 0 && i%5 !== 0) {
      } else if (i%5 === 0 && i%3 !== 0) {
        $("#result").text(letters[1]);
      }


    $("#result").text(result);

});
});
