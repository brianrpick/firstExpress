var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("hi there");
});

app.listen(3000, function(){
	console.log("serving app on port 3000")
})