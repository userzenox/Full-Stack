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
    let users = [];   
  names.rows.forEach((name) => {
       users.push(name);
           
  });
  return users;
}


async function checkVisisted() {

  const result = await db.query("select country_code from visit join person on person.id = visit.person_id join countries on countries.id = visit.country_id where person_id = $1" , users.id);
  let countries = [];
  result.rows.forEach((country) => {
    
     
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
   
     const users = await  getuser();

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal",

  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
   
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});


app.post("/user", async (req, res) => {
   
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
