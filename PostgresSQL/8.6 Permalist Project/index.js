import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: process.env.DB_PASSWORD,
  port: 5432,

});

db.connect();


// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];

 

 async function getitems( ){
  const result =   await db.query("select * from items");
  
   console.log(  "results " ,  result.rows);

  //  console.log("results: " + JSON.stringify(result.rows, null, 2));

    
  return result.rows;

}

app.get("/", async (req, res) => {
   
  const items = await getitems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});


app.post("/add", async (req, res) => {
  console.log(req.body);
    
  try {
     const r = await db.query(" insert into items (title) values ($1) ", [req.body.newItem])

  } catch (error) {
      console.log(" error in db " + error);
      
  }

  res.redirect("/");

});

app.post("/edit", async (req, res) => {
     console.log(req.body);
      const r = req.body
      try {
           const result = await db.query("update items set title = $1 where id = $2 ", [ r.updatedItemTitle, r.updatedItemId]);

      } catch (error) {
            console.log("error in edit ");
            
      }
      res.redirect("/");
});

app.post("/delete",  async (req, res) => {
     console.log(req.body);

     try{
          const result  = await db.query("delete from items where id = $1", [req.body.deleteItemId])
     }catch(err){
         console.log("error in delete " , err);
         
     }
     res.redirect("/");
     
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
