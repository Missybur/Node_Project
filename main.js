"use strict";

var md5 = require('md5');
var http = require('http');
var PORT = 3000;
var server = http.createServer(handleRequest);

function handleRequest(request, response){
  var params = request.url.split('/');
  switch(params[1]){
    case "math":
    mathOperators(params, response);
    break;
    case "sentence":
    letterFunctions(params, response);
    break;
    case "gravatar":
    gravatarFunctions(params, response);
    break;

  }

  response.end();

}

function mathOperators(params, res){

  if (params[2] == "square") {
    var num = params[3]
    var squared = num * num
    res.write("number squared is: " + squared.toString());
  }

  if (params[2] == "sum"){
    var sum = parseInt(params[3]) + parseInt(params[4]) + parseInt(params[5])
    res.write("number sum: " + sum )
  }

  if (params[2] == "cube"){
    var cubed = parseInt(params[3]) * parseInt(params[3]);
    res.write("number cubed is: " + cubed)
  }

}

function letterFunctions(params, res){
  var word = params[2]
  var strDecoded =  decodeURI(word)
  var strDecodedSplit = strDecoded.split(" ");
  var wordCount = strDecodedSplit.length;
  var spacesCount = wordCount -1;
  var chars = strDecoded.length;
  var letters = chars - spacesCount;
  var result = {"wordCount": wordCount, "spacesCount" : spacesCount, "letters" : letters}
  res.write(JSON.stringify(result))
}

function gravatarFunctions(params, res){

  var email = params[2];

  var gravatar = (md5(email));
  res.write("gravatar is: " + "http://www.gravatar.com/avatar/" + gravatar)
}

server.listen(PORT, function(){
});
