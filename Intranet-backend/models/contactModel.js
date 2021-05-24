const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    }
},{timestamps:true})


let storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./../Intranet-frontend/public/uploads/contact');
    },
    filename: function (req,file,cb){
        cb(null, Date.now()+path.extname(file.originalname) )
    }
})

ContactSchema.statics.uploadAttachment= multer({storage:storage,limits: {
    fileSize: 1024 * 1024 * 5, // max 5 MB
  }}).single('file');

module.exports = mongoose.model('Contact',ContactSchema);