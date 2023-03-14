import express from "express";
import mysql from "mysql";
import cors from "cors";
import fs from "fs";
import http from "http";
import https from "https";

const app = express();

// setting of https ////////////////////
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/changwenli.com/privkey.pem');
var certificate = fs.readFileSync('/etc/letsencrypt/live/changwenli.com/cert.pem');
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

var httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

// getCon return db
function getDB() {
  return mysql.createConnection({
  // host: "localhost",
  host: "3.88.51.187", /////////////////////////
  user: "root",
  password: "password",
  database: "mywebsite",
});
}


app.get("/api", (req, res) => {
  console.log("hello")
  res.json("hello");
});

app.get("/api/comment/:postname", (req, res) => {
  const postname = req.params.postname;

  const q = "SELECT * FROM comments WHERE `postname`=? GROUP BY time";
  getDB().query(q, [postname], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("get post comments data: ", data)
    return res.json(data);
  });
});

app.post("/api/comment", (req, res) => {
  console.log("post start...")
  const q = "INSERT INTO comments(`username`, `postname`, `comment`, `time`) VALUES (?)";

  // const myDate = new Date();
  // var mytime=myDate.toLocaleString(); 
  // mytime = mytime.trim();
  // mytime = mytime.replace(/,/g, "");
  // const time = mytime.split(" ")[1];


  // const year = mytime.split(" ")[0].split("/")[2];
  // const month = mytime.split(" ")[0].split("/")[1];
  // const day = mytime.split(" ")[0].split("/")[0];
  // mytime = year+"-"+month+"-"+day+" "+time;
  // console.log("my time backend: ", mytime);

  const now = new Date();

  // Extract the year, month, and day components
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  // Extract the hour, minute, and second components
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  // Concatenate the components into the desired format
  const localTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  // Output the local time to the console
  console.log(localTime);
  const mytime = localTime;


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
    } 
    console.log("post successful: ", data)
    return res.json(data);
  });
});




httpServer.listen(8800, () => {
  console.log("Connected to backend 8800.");
});
///////////////////
httpsServer.listen(8801, () => {
  console.log("Connected to backend 8801.");
});