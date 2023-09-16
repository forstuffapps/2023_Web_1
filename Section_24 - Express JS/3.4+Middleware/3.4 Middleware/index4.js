import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


function name_output(req, res, next) {
  const name = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your band name is : </h1> <h1>${name}</h1>`);
  next();
}

app.use(bodyParser.urlencoded({extended : true}));



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})


app.post("/submit", name_output);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
