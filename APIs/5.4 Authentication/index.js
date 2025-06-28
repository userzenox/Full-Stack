import express, { request } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "jackbauer";
const yourPassword = "IAmTheBest";
const yourAPIKey = "cb578b73-a353-42d7-be75-f9a65fe77889";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
 
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
   try{
     const response = await axios.get(API_URL + "random");
      res.render("index.ejs" , {content : response.data});

      
  
   }
   catch(error){
      console.error( "Failed to make request");
       res.status(500).send("failed to fetch activities")
   }

});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

       try{
     const response = await axios.get( API_URL + "all?page=1",{
          auth: {
             "username": "jackbauer",
             "password": "IAmTheBest"
          }
     } );
       
      console.log(response.data);
     
      res.render("index.ejs" , {content : response.data[0]});

      
  
   }
   catch(error){
      console.error( "Failed to make request");
       res.status(500).send("failed to fetch activities")
   }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
   try{
     const response = await axios.get(API_URL +"filter?score=5&apiKey=" + yourAPIKey);
      res.render("index.ejs" , {content : response.data[0]});
       
      console.log(response.data[0]);
      
      
  
   }
   catch(error){
      console.error( "Failed to make request");
       res.status(500).send("failed to fetch activities")
   }
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
