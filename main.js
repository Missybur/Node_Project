"use strict";

var http = require('http');
var PORT = 3000;
var math = require("./math");

function handleRequest(request, response){
  response.end("It works! Path hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server is listening on: http://localhost:%s", PORT);
});

