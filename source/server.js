// Now, using the express library

import express from "express";

// Create express server
const app = express();
// Define variable for our port
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log("Listening on http://127.0.0.1:3000");
});