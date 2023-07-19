import express from "express";
import mysql from "mysql";
import cors from "cors";
import fs from "fs";
import http from "http";
import https from "https";
import dotenv from 'dotenv';
import crypto from 'crypto';
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
var server;

if (process.env.PROTOCOL==="http"){
  server = http.createServer(app);
}
else if (process.env.PROTOCOL==="https"){
  var privateKey  = fs.readFileSync('/etc/letsencrypt/live/changwenli.com/privkey.pem');
  var certificate = fs.readFileSync('/etc/letsencrypt/live/changwenli.com/cert.pem');
  var credentials = {key: privateKey, cert: certificate};
  server = https.createServer(credentials, app);
}


app.use(cors());
app.use(express.json());

function hash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

// getCon return db
function getDB() {
  return mysql.createConnection({
    host: process.env.DB_IP,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "mywebsite",
    charset  : 'utf8mb4' // specify charset here
  });
}


app.get("/api", (req, res) => {
  // console.log("hello")
  res.json("hello");
});

// Get comments of a certain post. 
app.get("/api/comment/:postname", (req, res) => {
  const postname = req.params.postname;

  const q = "SELECT * FROM comments WHERE `postname`=? ORDER BY time";
  getDB().query(q, [postname], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("get post comments data: ", data)
    return res.json(data);
  });
});

// Post comment. 
app.post("/api/comment", (req, res) => {
  const q = "INSERT INTO comments(`username`, `postname`, `comment`, `time`) VALUES (?)";

  let date = new Date();
  let options = { 
    timeZone: 'UTC', 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };

  let UTCTime = new Intl.DateTimeFormat('en-GB', options).format(date);

  // Convert the date to the desired format
  let parts = UTCTime.split(", ");
  let datePart = parts[0].split("/").reverse().join("-");
  let timePart = parts[1];
  let formattedUTCTime = `${datePart} ${timePart}`;

  console.log("utc time", formattedUTCTime);
  const mytime = new Date(formattedUTCTime + 'Z');

  const values = [
    req.body.username,
    req.body.postname,
    req.body.comment,
    mytime,
  ];

  getDB().query(q, [values], (err, data) => {
    if (err){
      console.log("post failure: ", err)
      return res.send(err);
    };
    console.log("post successful: ", data)
    return res.json(data);
  });
});

// Register
app.post('/api/register', (req, res) => {
  const qCheck = "SELECT * FROM users WHERE `username`=?";
  getDB().query(qCheck, [req.body.username], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    if (data.length>0){
      return res.json('Username exists.');
    }

    // username does NOT exist. 
    const pwdEncrypted = hash(req.body.password);
    const q = "INSERT INTO users(`username`, `password`) VALUES (?)";
    const values = [
      req.body.username,
      pwdEncrypted,
    ];
    getDB().query(q, [values], (err, data) => {
      if (err){
        console.log("post failure: ", err)
        return res.send(err);
      };
      console.log("post successful: ", data);
      return res.json(data);
    })
  });
});

// Login
app.post('/api/login', (req, res) => {
  const pwdEncrypted = hash(req.body.password);
  const qCheck = "SELECT * FROM users WHERE `username`=? AND `password`=?";
  getDB().query(qCheck, [req.body.username, pwdEncrypted], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    if (data.length===0){
      return res.json('Username/password error.');
    }
    else {
      const token = jwt.sign({username: req.body.username}, 'jwtkey');
      return res
        .cookie('access_token', token, {
          httpOnly: true
        })
        .status(200)
        .json({username: req.body.username});
    }
  });
});

app.post('/api/logout', (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
});


server.listen(process.env.BACKEND_PORT, () => {
  console.log("Connected to backend ", process.env.BACKEND_PORT);
});