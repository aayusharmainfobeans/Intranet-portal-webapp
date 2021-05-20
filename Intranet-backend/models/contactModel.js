const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const CONTACT_PATH = path.join('.././Intranet-frontend/public/uploads/contact');
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
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
    attachment:{
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

ContactSchema.statics.uploadAttachment= multer({storage:storage}).single('attachment');
ContactSchema.statics.contactPath=CONTACT_PATH;

module.exports = mongoose.model('Contact',ContactSchema);