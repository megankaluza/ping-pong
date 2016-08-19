//Business Logic//
var output = output;
for(i=1;i<=20;++i);

  if (i%3){
    output = "Ping";
  }





//User Interface Logic//
$(document).ready(function(){
  $("form#logic").submit(function(event){
    event.preventDefault();
    var output = $("#output").val();

  });
});
