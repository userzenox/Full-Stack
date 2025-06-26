import express from "express";
const app = express();

const port = 3000;

app.get("/", (req,res)=>{
  
  res.send("<h1>hello </h1>");  
});

app.get('/about' , (req,res)=>{
    res.send("about me");
})

app.listen(port, () => {
    console.log(` Server running on ${port}.`);
    
});