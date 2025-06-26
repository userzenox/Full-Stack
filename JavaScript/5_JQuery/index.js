$("h1").css("color", "red");


$("button").click(function() {
    $("h1").css("color" , "purple");
});

$("body").addClass("change");





$("input").keydown(function(event){
    
    console.log(event.key);
    $("h1").text(event.key);   
});

//other way to add eventlistener

$(document).on("keydown",function(e){
    $("h1").text(e.key);
      
})

$("button").click( function(){
   $("h1").fadeToggle();
});