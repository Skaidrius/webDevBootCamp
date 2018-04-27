var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

var campgrounds = [
   { name: "first ground", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144397f0c17ca1ecb3_340.jpg"},
   { name: "second ground", image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f2c179a2ebb4be_340.jpg"},
   { name: "third ground", image: "https://farm4.staticflickr.com/3907/14566408705_4fa1236cbe.jpg"},
   { name: "fourth ground", image: "https://farm3.staticflickr.com/2696/4494136794_4c588f1439.jpg"},
   { name: "first ground", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144397f0c17ca1ecb3_340.jpg"},
   { name: "second ground", image: "https://pixabay.com/get/eb32b9072ef3063ed1584d05fb1d4e97e07ee3d21cac104497f2c179a2ebb4be_340.jpg"},
   { name: "third ground", image: "https://farm4.staticflickr.com/3907/14566408705_4fa1236cbe.jpg"},
   { name: "fourth ground", image: "https://farm3.staticflickr.com/2696/4494136794_4c588f1439.jpg"}
];

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", { campgrounds:campgrounds });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    
    campgrounds.push(newCampground);
    
    res.redirect("/campgrounds");
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The yelpcamp server is running");
});