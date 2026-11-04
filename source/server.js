// Import express constructor function from library
import express from "express";

// Create our express application
let app = express();

// Use static file middleware so that I can put static files
// in my source/site folder and they will be available
app.use(express.static("source/site"));

// Variable for counting visitors
let visitors = 0;

// Set up a route that gives out visitor data
app.get("/visitors", (req, res) => {
    visitors = visitors + 1;
    res.json({ visitors });
});

// Start the server listening for requests
app.listen(3000);

// Print a message about our server so we know it's running
console.log("Listening on http://127.0.0.1:3000/");