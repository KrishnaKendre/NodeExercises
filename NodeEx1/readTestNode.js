var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

  fs.readFile('testNode.js', 'utf8', function(err, data){
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    if(err){
        res.write('Unable to find or open file for reading\n');
    } else{
        res.write(data);
    }
    
    res.end();
  
  });
                  
}).listen(3000);

console.log('Server started on localhost: 3000; Ctrl-C to terminate.');