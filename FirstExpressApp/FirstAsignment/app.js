var express = require("express");
var app = express();

//routes
app.get("/", function(req, res){
    res.send("Welcome to the first Assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase(); 
    var sounds = {
        pig: "Oink!",
        cow: "Moo!",
        dog: "Woof woof!"
    };

   res.send("The "+ animal+ " says "+ sounds[animal]);
});

app.get("/repeat/:word/:times", function(req, res){
    var string = "";
    var phrase = req.params.word;
    var times = Number(req.params.times);
    for (var i = 0; i < times; i++){
        string += phrase + " ";
    }
    res.send(string);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found! What are you doing with your life?");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
})