var http = require('http');
var query = require('url');
var fs = require('fs');

function serveResource(res, path, contentType, responseCode) {
  if (!contentType) contentType = 'text/html';
  if (!responseCode) responseCode = 200;
 
  fs.readFile(__dirname + path, function(err, data) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    } else {
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}
 
http.createServer(function(req, res) {
  switch (req.url.replace(/\/?(?:\?.*)?$/, '')) {
    case '':
      serveResource(res, '/public/index.html');
      break;
    case '/portfolio-single':
      serveResource(res, '/public/portfolio-single.html');
      break;
    case '/images/about-bg.jpg':
      serveResource(res, '/public/images/about-bg.jpg', 'image/jpeg');
      break;
    default:
      serveResource(res, '/public/404.html', 'text/html', 404);
      break;
  }
}).listen(3000);