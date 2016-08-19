//Business Logic//

var pingPong = function(number) {
  if (number % 3 === 0){
    return true;
  } else {
  return false;
}
};

//var letters = ["Ping", "Pong" , "Ping-pong"];

  //for(i=0;i<letters.length;i++){
  //  if ()
  //};

//User Interface Logic//
$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);

});
});
