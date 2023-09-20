const express = require("express");
const app = express();
const http = require('http');

//1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code
//3 views code
app.set("views", "views");
app.set("views engine", "ejs");

//4 routing code
app.get("/", function (req, res) {
  res.end("HELLO WORLD");
});
app.get("/gift", function (req, res) {
    res.end("siz sovgani qolga kiritdingiz");
  });
  

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
