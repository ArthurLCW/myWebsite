import express from "express";
import mysql from "mysql";
import cors from "cors";
import fs from "fs";
import http from "http";
import https from "https";

var privateKey  = fs.readFileSync('/etc/letsencrypt/live/changwenli.com/privkey.pem');
var certificate = fs.readFileSync('/etc/letsencrypt/live/changwenli.com/cert.pem');
var credentials = {key: privateKey, cert: certificate};
// const express = require('express');
const app = express();

// your express configuration here
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// const app = express();
app.use(cors());
app.use(express.json());

// getCon return db
function getDB() {
  return mysql.createConnection({
  // host: "localhost",
  host: "3.88.51.187", /////////////////////////
  user: "root",
  password: "password",
  // database: "YouTubeBooksTest",
  database: "youtubebookstest",

});
}


app.get("/", (req, res) => {
  console.log("hello")
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  getDB().query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("get books data: ", data)
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  getDB().query(q, [values], (err, data) => {
    if (err){
      console.log("post failure: ", err)
      return res.send(err);
    } 
    console.log("post successful: ", data)
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  getDB().query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  getDB().query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

httpServer.listen(8800, () => {
  console.log("Connected to backend 8800.");
});
httpsServer.listen(8801, () => {
  console.log("Connected to backend 8801.");
});