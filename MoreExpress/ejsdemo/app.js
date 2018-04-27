var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/color/:fav", function(req, res){
    var fav = req.params.fav;
    res.render("color.ejs", {favColor: fav});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
})