
import express from "express";
import axios from "axios";

const app = express();

app.use(express.static("public"));

app.get('/' , async (req,res)=> {
    
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
            secret: response.data.secret,
            user : response.data.username,
        })
        console.log(response.data.secret);
        
    }
    catch(error){
        console.log(error.response.data);
        
    }
})

app.listen(3000, () => {
    console.log("successfull ");
    
})