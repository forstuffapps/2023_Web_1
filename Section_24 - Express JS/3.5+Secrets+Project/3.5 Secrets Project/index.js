//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming



import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var matched = false;



function secrets(req, res, next) {
    
    if (req.body["password"]=="ILoveProgramming")
    {
        //matched = true;
        res.sendFile(__dirname + "/public/secret.html");
    }
    else
    {
        res.sendFile(__dirname + "/public/index.html")
    }
    next();
}

app.use(bodyParser.urlencoded({extended : true}));

//app.use(secrets)


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
})


app.post("/check", secrets);
/*
(req, res) =>{
    if(matched)
    {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else
    {
        res.sendFile(__dirname + "/public/index.html")
    }
});
*/


app.listen(port, () =>{
    console.log(`Listening on port number ${port}`);
})



