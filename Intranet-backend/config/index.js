require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MongoURL,{useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true})
.catch(e =>{
    console.error('connection error',e.message);
})

const db = mongoose.connection;

module.exports = db;