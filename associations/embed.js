var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// post - title, content
var postSchema = new mongoose.Schema({
    title:String,
    content: String
});

// user: email, name
var userSchema = new mongoose.Schema({
    email:String,
    name: String,
    posts: [ postSchema ]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email:  "hermione@hogwards.com",
//     name:   "Hermione",
// });

// newUser.posts.push({
//     title:  "How to make wizard stick",
//     content:"There are plenty of methods to do that"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "First post",
//     content: "Content of the first post"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

User.findOne({name:"Hermione"}, function(err, user){
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Something about us",
            content: "There are secrets among us"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
})