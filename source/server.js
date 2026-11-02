// Import the HTTP variable
import http from "http";

// Visitor counter variable
let visitors = 0;

// Create a server object with a function that implements the server behavior
const server = http.createServer((req, res) => {
    // req is the request object. Print out the request URL
    console.log(`REQUEST: "${req.url}"`);
    
    // res is an object for defining a response, call res.end to finish sending the response
    res.end(`<h1>Here's the page at ${req.url}</h1><p>You are visitor number ${visitors}.</p>`);

    // update the visitor variable
    visitors = visitors + 1;
});

// Start the server. We're listening on port 3000
server.listen(3000);

// Print a message about our server so we know it's running
console.log("Listening on http://127.0.0.1:3000/");