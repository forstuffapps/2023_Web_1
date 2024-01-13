// HINTS:
// 1. Import express and axios
import express from "express"
import axios from "axios"



// 2. Create an express app and set the port number.
var app = express();
var PORT = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"))

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res)=>
{
    var url = 'https://secrets-api.appbrewery.com/random'
    try{
    const result = await axios.get(url);
    res.render("index.ejs", {user : result.data.username, secret : result.data.secret})
    }
    catch(error){
        console.log(error.message)
    }
    
})

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(PORT, ()=>
{
    console.log("app listening on port 3000")
});
