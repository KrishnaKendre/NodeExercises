var http = require('http');
var express = require('express');
var app = express();
 
app.get('/', function(req, res) {
  res.type('text/html');
  res.send('<h1>Home Page</h1>');
});
 
app.get('/about', function(req, res) {
  res.type('text/html');
  res.send('<h1>About Page</h1>');
});
 
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
 
http.createServer(app).listen(3000);