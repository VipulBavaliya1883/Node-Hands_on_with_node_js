var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req,res){
    var query = url.parse(req.url).query;
    var uname = querystring.parse(query)["uname"];
    var branch = querystring.parse(query)["branch"];

    console.log(uname);
    console.log(branch);
}).listen(3000);

console.log("Server started on 3000");