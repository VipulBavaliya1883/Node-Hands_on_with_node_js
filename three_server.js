var http = require('http')
var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {"content-Type":"text/html"});
        res.write("<h1>Defult Page</h1>");
        res.end();
    }
    else if(req.url == '/student'){
        res.writeHead(200, {"content-Type":"text/html"});
        res.write("<h1>Student Page</h1>");
        res.end();
    }
    else if(req.url == '/admin'){
        res.writeHead(200, {"content-Type":"text/html"});
        res.write("<h1>Admin Page</h1>");
        res.end();
    }
    else{
        res.writeHead(200, {"content-Type":"text/html"});
        res.write("<h1>Please Enter Student or Admin in url</h1>");
        res.end();
    }
}).listen(3000);

console.log("Server started on 3000");


