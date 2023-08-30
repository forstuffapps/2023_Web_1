

import express from "express"

const app = express();

app.get("/", (req,res) =>
{
    res.send("<h1>Hello W</h1>");
})


app.get("/contact", (req,res) =>
{
    res.send("<h2>905-782-1163</h2>");
})


app.get("/about", (req,res) =>
{
    res.send("<p>Welcome to thos web. Hope you are doing okay</p>")
})

app.listen(3000, () =>
{
    console.log("server is runnning in port 3000");
})


