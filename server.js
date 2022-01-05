var http = require("http");
var sever = http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Welcome to My Page!!!");
    res.end();
  })
  .listen(3000);

console.log("Server started on 3000");
