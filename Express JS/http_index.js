const http = require('http');  // required the http module 
const PORT = 4000;
// Using the function createServer() function we can actually create a basic server using http
// this function returns server object, and takes a callback as an argument.
// this function created a server object didn't start the server
const server = http.createServer(function listener(request, response) {
    /*
    * request -> will be able to details of incoming http request -> object
    * response -> we will be able to configure what response we need to send
    *           for incoming http request;
    * */
    // this callback is a kind of listener function that is going to collect
    // every http request that we will make to our server
    console.log("Request received");
    // console.log("Request object details "+request);
    // console.log("Response object details "+response);
    if (request.url == '/home') {
        console.log(request.method); 
        response.end("Welcome to home.")
    }
})

server.listen(PORT, function exec() {
    console.log("Server started at", PORT);
})