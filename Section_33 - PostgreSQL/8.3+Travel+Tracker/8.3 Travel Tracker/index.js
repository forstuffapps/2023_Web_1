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

db.query("SELECT country FROM public.visited_countries", (err, res) => {

  if(err){
    console.log(err.message)
  }
  else
  {
    countries = res.rows;
    //console.log(countries)
  }
})

function get_countries(){
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
  var z = get_countries();
  console.log(z)
  res.render("index.ejs", {countries : z, total : countries.length})
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
