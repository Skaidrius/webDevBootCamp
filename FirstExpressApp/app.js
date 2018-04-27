var express = require('express');
var app = express();

// routes
app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/dog", function(req, res){
    console.log("someone has searched for a dog");
    res.send("Doggy doggy doggy");
});

app.get("/bye", function(req, res){
    res.send("GoodBye!");
});

app.get('/r/:subname', function(req, res){
    var subreditname = req.params.subname;
    res.send("Welcome to "+subreditname.toUpperCase()+"!!!");
});

app.get('/r/:subname/comments/:id/:text', function(req, res){
    console.log(req.params);
    res.send("Welcome to comments page");
});

app.get("*", function(req, res){
    res.send("There is no such page!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
})