

import express from "express";

const app = express();


app.get("/", (req, res) =>
{
    res.send("Hellow World!!! qwerdfndnf");
})


app.listen(3000, () =>
{
    console.log("Server is running on port 3000!!!");
})

