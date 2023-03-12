const { request } = require('express');
const express = require('express'); //"express" is a package actually 

const app = express(); //We are storing this package in this "app" function

app.get("/", function(request, response){

    response.send("hello");
    console.log(request)

});

app.listen(3000, function(){

    console.log("Server started on port 3000.");

});