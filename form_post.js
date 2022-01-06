var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req,res){
    var data1 = "";
    req.on('data',function(chunk){
        console.log(chunk.toString().String);
        data1 +=chunk; 
    });

    req.on('end',function(){
    var uname = querystring.parse(data1)["uname"];
    var branch = querystring.parse(data1)["branch"];

    console.log(uname);
    console.log(branch);
    });

}).listen(3000);

console.log("Server started on 3000");