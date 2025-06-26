

var numberOFDrumButtons = document.querySelectorAll(".drum").length;
console.log(numberOFDrumButtons);


// for( var i=0;i < numberOFDrumButtons;i++){
//    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
//     alert("i got clicked")
// });
// }


// var audio = new Audio("./sounds/crash.mp3");
// for( var i=0;i < numberOFDrumButtons;i++){
//    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
//        console.log(this.innerHTML);
       
//        this.style.color = "white";


// });
// }



var audio = new Audio("./sounds/crash.mp3");
for( var i=0;i < numberOFDrumButtons;i++){
   document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
             var  buttonText  =  this.innerHTML;
              console.log(buttonText);
              console.log(this);

    switch (buttonText) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
         case "a":
            var audio = new Audio("./sounds/kick-greg.mp3");
            audio.play();
        break;
        //  case "s":
        //     var audio = new Audio("./sounds/snare.mp3");
        //     audio.play();
        // break;
         case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
         case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
         case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
         case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
      
        default:
            console.log("wrong input" + buttonText)
            break;
      }
    
      animation(buttonText);
      
});
}
     

// you can even create like this

 document.querySelectorAll(".drum")[2].addEventListener("click" , function () {
          var audio = new Audio("./sounds/snare.mp3");
            audio.play();
});



//Keyboard Event Listener:

document.addEventListener("keydown" , function(event){
     var keyboard = event.key;
    console.log(event.key);
     
     switch (keyboard) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
         case "a":
            var audio = new Audio("./sounds/kick-greg.mp3");
            audio.play();
        break;
         case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
         case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
         case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
         case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
         case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
         case "i":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
      
        default:
            console.log("wrong input" + buttonText)
            break;
      }
      
      animation(event.key);
});




function animation(currentKey){
     
  var activebutton = document.querySelector("." + currentKey);
  
  activebutton.classList.add("pressed");

  setTimeout(function (){
     activebutton.classList.remove("pressed");
   } ,  500);

}



// interval button
let intervalId = null;
let isPlaying = false;

document.querySelector("#btn1").addEventListener("click", function () {
    if (!isPlaying) {
        intervalId = setInterval(myFunction, 500);
        isPlaying = true;
        this.textContent = "Stop Sound"; // Optional: change button text
    } else {
        clearInterval(intervalId);
        isPlaying = false;
        this.textContent = "Play Sound"; // Optional: revert text
    }
});

function myFunction() {
     var audio = new Audio("./sounds/kick-greg.mp3");
     audio.play();
}


