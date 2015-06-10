var http = require('http'); // Loads http module

// Creates a new web server
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-tyep': 'text/html'});
    res.end('<h1> Node is Working </h1>');
}).listen(3000, function(){ console.log('Start Server'); });

console.log('Server started on localhost:3000, Ctrl-C to terminate. ');