import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "postgrespwd",
  port: 5432,
});

db.connect();


let users = []
function get_all_users(){
 db.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    return res.rows;
  }
});
}

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {

  const email = req.body.username
  const password = req.body.password
  try{
      
      const result = await db.query(`select * from users where email='${email}'`);
      if (result.rows.length >0)
      {
        res.send("User already exists")
      }
      else
      {
        const result = await db.query(`INSERT INTO users (email,password) VALUES('${email}', '${password}')`);
        res.render("secrets.ejs")
      }
        
  }
  catch(err)
  {
    console.log(err)
  }
});

app.post("/login", async (req, res) => {

  const email = req.body.username
  const password = req.body.password
  try
  {
    const result = await db.query(`select * from users where email='${email}'`)
    if (result.rows.length >0)
    {
      if(result.rows[0].password==password)
      {
        res.render("secrets.ejs")
      }
      else
      {
        res.send("Password is wrong, Try again")
      }
    }
    else
    {
      res.send("User not found")
    }
  }
  catch(err)
  {
    console.log("eeror________________1")
    console.log(err)
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
