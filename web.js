var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync( htmlfile ).toString();
  response.send( html );
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.use("/css",express.static(__dirname+"/css"));
app.use("/font",express.static(__dirname+"/font"));
app.use("/img",express.static(__dirname+"/img"));
app.use("/js",express.static(__dirname+"/js"));
app.listen(port, function() {
  console.log("Listening on " + port);
});
