const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const path = require("path");
const dbPath = "app/db/shimohuri.sqlite3";

const ALLOWED_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS",
];

app.use(express.static(path.join(__dirname, "public")));

//get all users
app.get("/api/v1/users", (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const origin = req.headers.origin;
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", ALLOWED_METHODS.join(","));
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Custom_Header"
  );
  db.all("SELECT * FROM users", (err, rows) => {
    res.json(rows);
  });
  db.close();
});

//get a user
app.get("/api/v1/users/:id", (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const id = req.params.id;
  db.get(`SELECT * FROM users WHERE id =${id}`, (err, row) => {
    res.json(row);
  });
  db.close();
});
//search users by matching id
app.get("/api/v1/search", (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const keyword = req.query.q;
  db.all(`SELECT * FROM users WHERE name LIKE "%${keyword}%"`, (err, rows) => {
    res.json(rows);
  });
  db.close();
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Listen on port:" + port);
