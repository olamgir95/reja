const express = require("express");
const app = express();
const res = require("express/lib/response");
const fs = require("fs");

const db = require("./server").db();
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

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
  console.log('user entered /create-item');
  console.log(req.body.reja);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log('user entered /');
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});
module.exports = app;
