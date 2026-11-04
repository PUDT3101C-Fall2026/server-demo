import express from "express";

let app = express();

let visitors = 0;

app.get("/visitors", (req, res) => {
    res.json({ visitors });
    visitors = visitors + 1;
});

app.use(express.static("source/site"));

app.listen(3000);

// Print a message about our server so we know it's running
console.log("Listening on http://127.0.0.1:3000/");