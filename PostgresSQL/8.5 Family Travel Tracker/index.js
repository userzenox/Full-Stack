import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Piyush@132",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;
let users = [];
// let users = [
//   { id: 1, name: "Angela", color: "teal" },
//   { id: 2, name: "Jack", color: "powderblue" },
// ];

async function getuser(){
  const names = await db.query("Select id,first_name,color from person")
    // let users = [];   
   users = names.rows;
  // console.log(users.find((user) => user.id == currentUserId));
  
  
  return users.find((user) => user.id == currentUserId)
}


async function checkVisisted() {

  const result = await db.query("select country_code from visit join person on person.id = visit.person_id join countries on countries.id = visit.country_id where person_id = $1" , [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    
     
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
   
     const currentuser = await  getuser();    
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentuser.color,

  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
   const currentuser = await  getuser(); 
  
   
  try {
    const result = await db.query(
      "SELECT id FROM countries WHERE LOWER(country_name) LIKE '%' || $1 ;",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.id;
     console.log(data);
     console.log(countryCode);
     
     
    try {
      await db.query(
        "INSERT INTO visit (person_id,country_id) VALUES ($1,$2)",
        [ currentuser.id,countryCode]
      );
      res.redirect("/");
    } catch (err) {
      // console.log(err);
        const countries = await checkVisisted();
   
     const currentuser = await  getuser();    
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentuser.color,
      error: "Country has already been added, try again.",
  });
    }
  } catch (err) {
    // console.log(err);
     const countries = await checkVisisted();
   
     const currentuser = await  getuser();    
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentuser.color,
    error: "Country name does not exist, try again.",
  });
  }
});


app.post("/user", async (req, res) => {
     
    
    if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
    
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
     console.log(req.body);
   const result = await db.query(
  "INSERT INTO person (first_name, color) VALUES ($1, $2) RETURNING id",
  [req.body.name, req.body.color]
);


       const id = result.rows[0].id;
       console.log(id);
       
       currentUserId = id;
        res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
