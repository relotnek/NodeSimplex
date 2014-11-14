var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200);
	res.end('<html><h3>Hello World</h3></html>');
});

server.listen(8080);
console.log('Listening on 8080');