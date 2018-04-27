var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temparament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Murka",
//     age: 5,
//     temparament: "Evil"
// });

// george.save(function(err, cat){
//     if(err) {
//         console.log("Something went wrong");
//     } else {
//         console.log("Save is complete succesfully");
//         console.log(cat);
//     } 
// });

Cat.create({
    name: "Juode",
    age: 11,
    temparament: "Pretty"
}, function(err, res){
    if (err){
        console.log("There were some errors");
        console.log(err);
    } else {
        console.log("The cat was saved succesfully");
        console.log(res);
    }
});

Cat.find({}, function(err, cat){
    if(err){
        console.log("Something went wrong"); 
    } else {
        console.log(cat);
    }
})