import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
var cnt = 0;
app.get("/", (req, res) => {
  res.render("index.ejs", {count : cnt})
});

app.post("/submit", (req, res) => {
  cnt=0
  cnt+= req.body["fName"].length
  cnt += req.body["lName"].length
  res.render("index.ejs", {count : cnt})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
