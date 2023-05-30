const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,response){
    // response.send("Thanks for posting that!");
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var add = num1 + num2 ;
    response.send("The addition of the two numbers " + num1 + " and " + num2 + " is : " + add);
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});