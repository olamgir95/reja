const express = require("express");
const app = express();
const res = require("express/lib/response");
const http = require("http");

//1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code
//3 views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "succsess" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
