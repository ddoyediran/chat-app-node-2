const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

// routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(3000, () => {
  console.log("Server is listening on *:3000");
});
