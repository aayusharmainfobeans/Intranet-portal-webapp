const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();


//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get("/",(req,res)=>{
    res.send("Hello World");
})

//Port
const Port = 8000;

//Server 
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
})