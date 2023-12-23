
import express from "express"


const app = express();


var date = new Date("2023-12-23")
var day = date.getDay()
var days_dict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



app.get("/", (req, res) =>
{
    res.render("index.ejs", {day : days_dict[day]});
}
);


app.listen(3000, function(){
    console.log("Port is listening on 3000");
})





