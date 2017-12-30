var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("hi there");
});

app.get("/bye", function(req, res){
	res.send ("Goodbye");
});

app.get("*", function(req, res){
	res.send("you are a star");
});

app.listen(3000, function(){
	console.log("serving app on port 3000")
})