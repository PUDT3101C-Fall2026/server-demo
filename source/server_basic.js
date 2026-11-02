import http from "http";

let visitors = 0;

http.createServer((req, res) => {
    console.log(`REQUEST: "${req.url}"`);

    res.end(`You are visitor number ${visitors}!`);
    visitors = visitors + 1;
}).listen(3000);

console.log("Listening on http://127.0.0.1:3000");