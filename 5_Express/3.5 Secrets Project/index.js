import express from "express" ;
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();

// app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: true }));


const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req,res) => {
   
    console.log(req.body);
     if(req.body.password == "piyush"){
            res.sendFile(__dirname + '/public/secret.html');

     }
     else{
            res.sendFile(__dirname + '/public/index.html');

     }
});

app.listen(3000 , () => {
     console.log("site is working");
     
});
