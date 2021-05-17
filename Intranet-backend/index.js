require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/index");
const applaudRouter = require('./routes/routes');
const session = require('express-session');
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
//app.use('/uploads',express.static(__dirname+'/uploads'));

// Database Connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Database Connected !!!");
});


//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api',applaudRouter);

//Session
app.use(session({
  name:'intranet',
  secret:'hdhnfvcfdmkfjlxl.lcxd.j',
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge:(1000 * 60* 60)
  }
}));

//Port
const Port = process.env.Port || 5000;

//Server
app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
