import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password : "postgrespwd",
  port : 5432
});

db.connect();

var countries = [];



async function get_countries(){

    db.query("SELECT country FROM public.visited_countries", async (err, res) => {

      if(err){
        console.log(err.message)
      }
      else
      {
        countries = res.rows;
        //console.log(countries)
      }
    })

  var z=[];
  countries.forEach(element => {
    z.push(element.country);
  });
  return z.join(',');
}


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  var z = await get_countries();
  //console.log(z)
  res.render("index.ejs", {countries : z, total : countries.length})
});



app.post("/add", async (req,res) =>{
  const result = await db.query(`SELECT country_code FROM countries WHERE country_name='${req.body.country}'`)
  //console.log(`INSERT INTO visited_countries (country) VALUES(${result.rows[0].country_code})`)
  await db.query(`INSERT INTO visited_countries (country) VALUES('${result.rows[0].country_code}')`)
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
