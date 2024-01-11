import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "qwe";
const yourPassword = "qwe";
const yourAPIKey = "c5cc6630-160d-4f53-a420-f3779f2e2ff8";
const yourBearerToken = "d2b7e833-71a3-4d3c-b46a-5b8ac4898798";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  var url = 'https://secrets-api.appbrewery.com/random'
  axios.get(url)
  .then(function (response){
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  })
  .catch(function (error){
    res.render("index.ejs", {content : error.message})
  })
});

app.get("/basicAuth", (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

    var url = 'https://secrets-api.appbrewery.com/all?page=1' 
    axios.get(url, {auth : {
      username : yourUsername,
      password : yourPassword
    }})
    .then(function (response){
      res.render("index.ejs", {content : JSON.stringify(response.data)})
    })
    .catch(function (error){
      res.render("index.ejs", {content : error.message})
    })

});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  var url = 'https://secrets-api.appbrewery.com/filter'
  axios.get(url, {
    header : {
    },
    params : {
      score : 5,
      apiKey : yourAPIKey
    }
  })
  .then(function (response){
    res.render("index.ejs", {content : JSON.stringify(response.data)})
  })
  .catch(function (error){
    res.render("index.ejs", {content: error.message})
  })
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

var url = 'https://secrets-api.appbrewery.com/secrets/42'
axios.get(url, {
  headers  : {
    Authorization : `Bearer ${yourBearerToken}`
  }
})
.then(function (response)
{
  res.render("index.ejs", {content : JSON.stringify(response.data)})
})
.catch(function (error)
{
  res.render("index.ejs", {content : error.message})
})


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
