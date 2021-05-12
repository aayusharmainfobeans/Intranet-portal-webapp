require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");
const applaudRouter = require('./routes/routes')
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

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

//Port
const Port = process.env.Port || 5000;

//Server
app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
