// $("h1").css("color" , "purple");

var arr = [ "green", "red", "yellow" , "blue" ];

var userarr = [];
var randomarr = []
var len = 0;
function nextSequence(){
    var r = Math.random();
 
    r = Math.floor(r*4);
     nextcolor = arr[r];

     $("#" + nextcolor).fadeIn(100).fadeOut(100).fadeIn(100);

       randomarr.push(nextcolor);

       var audio = new Audio(`./sounds/${nextcolor}.mp3`);
       audio.play();
       len++;
        $("h1").text(`level ${len}`)
}

 $(document).keydown( function (){
        
         if(len === 0){
             
             setTimeout(() => {
               nextSequence();
                 }, 600);
         }    

   

})



var key;
 $(".btn").click(function(e){
           
             target = e.target.id;

            // pressing(target);
             $(`.` + target).addClass("pressed");
             setTimeout(function() {
            $(`.` + target).removeClass("pressed");
            }, 100); 

            // createSound(target);
            var audio = new Audio(`./sounds/${target}.mp3`);
            audio.play();

            //animation
           
                userarr.push(target);
              
                  console.log(randomarr);
                  console.log(userarr);

                  var t =  arraysEqual(userarr,randomarr);
           console.log("checking" + t);
              
       
                     

         
                   
    });


    function wrong(){
        $("body").addClass("game-over");
           setTimeout(function(){
               $("body").removeClass("game-over")
           }, 300)
        
      var audio = new Audio(`./sounds/wrong.mp3`);
       audio.play();

        $("h1").text("Game Over");
    }




    function arraysEqual(arr1, arr2) {
      
        
         for (let i = 0; i < arr1.length; i++) {
              if (arr1[i] !== arr2[i]) {
                wrong()
                return false;
              }
                   }

                     if (arr1.length === arr2.length){
                       setTimeout(() => {
                           userarr=[];
                           nextSequence();
                              }, 1000);

                        return true;
                   
                        }

                        
                  }
    












    
// function createSound(key){
//       // $("#" + key).click(function(){
//       //      var audio = new Audio("./sounds/blue.mp3");
//       //      audio.play();
//       //      console.log("running");
           
//       // });

//       switch (key) {
//         case "red":
//             var audio = new Audio("./sounds/red.mp3");
//             audio.play();
//           break;
//         case "yellow":
//             var audio = new Audio("./sounds/yellow.mp3");
//             audio.play();
//           break;
//         case "blue":
//             var audio = new Audio("./sounds/blue.mp3");
//             audio.play();
//           break;
//         case "green":
//             var audio = new Audio("./sounds/green.mp3");
//             audio.play();
//           break;
      
//         default:
//           break;
//       }
// }



// function pressing(key){
      
//       $(`.${key}`).click(function(){
//       $(`.${key}`).addClass("pressed");
//   setTimeout(function() {
//      $(`.${key}`).removeClass("pressed");
// }, 100);
//   })
 
// }


