import * as express from "express";

const server = express.default();

server.get("/", (req, res) => {
    res.send("HI WORLLLLD");
});

server.listen(80, () => {
    console.log("Listening, on port 80")
});