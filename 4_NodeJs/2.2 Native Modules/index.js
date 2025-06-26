const fs = require("fs");

// fs.writeFile("message.txt" , "hello from NodeJs!" , (err) => {
//     if(err) throw err;
//     console.log("the file has been saved!");
    
// })





fs.readFile('./message.txt', 'utf8',(err, data) => {
  if (err) throw err;
  console.log(data);
}); 