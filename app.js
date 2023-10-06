const express = require("express");
const app = express();
const res = require("express/lib/response");
const fs = require("fs");

const db = require("./server").db();
const mongoDb = require("mongodb");
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
  console.log("user entered /create-item");
  console.log(req.body.reja);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: mongoDb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    { _id: mongoDb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/delete-all", (req, res) => {
  console.log(req.body);
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "Hamma rejalar delete bo'ldi" });
    });
  }
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
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
