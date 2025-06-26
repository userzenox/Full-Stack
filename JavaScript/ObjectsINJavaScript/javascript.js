 var houseKeeper1 = {
   name: "zinta",
   experience: 2,
   work: "cleaning",
}


console.log(houseKeeper1.name);


function HouseKeeper(name,age,haspermit,languages){
    this.name = name;
    this.age = age;
    this.haspermit = haspermit;
    this.languages = languages;

    this.clean = function(){
        alert("Cleaning in progress");
    }
}

var houseKeeper1 = new HouseKeeper("steven", 64, true , ["Hindi" , "English"]);

houseKeeper1.clean();

console.log(houseKeeper1);