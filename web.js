var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var message = fs.readFileSync("index.html", 'utf-8');


app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(message.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
