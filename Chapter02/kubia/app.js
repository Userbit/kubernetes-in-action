const http = require('http');
const os = require('os');

console.log("Kubia:v2-8081 server starting...");

var handler = function(request, response) {
  console.log("Kubia:v2-8081 Received request from IP:" + request.connection.remoteAddress + " Hostname: " + os.hostname());
  response.writeHead(200);
  response.end("Kubia:v2-8081 You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8081);

