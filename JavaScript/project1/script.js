


 var a = Math.random();
   a = Math.floor(a*6) +1;

    var b = Math.random();
   b = Math.floor(b*6) +1;
 console.log(a);
 console.log(b);


document.querySelector(".img1").setAttribute("src" , `./images/dice${a}.png`)
document.querySelector(".img2").setAttribute("src" , `./images/dice${b}.png`)



document.querySelector(".button").addEventListener("click" , function(){
   var a = Math.random();
   a = Math.floor(a*6) +1;

    var b = Math.random();
   b = Math.floor(b*6) +1;
 console.log(a);
 console.log(b);


document.querySelector(".img1").setAttribute("src" , `./images/dice${a}.png`)
document.querySelector(".img2").setAttribute("src" , `./images/dice${b}.png`)    
  if(a> b){
        document.querySelector(".container h1").innerHTML = " 🚩 player1 wins "
       }
       else if(a == b){
          document.querySelector(".container h1").innerHTML = "its a 🤞draw! "
       }
       else{
           document.querySelector(".container h1").innerHTML = "player2 wins🚩"
       }
       
})


