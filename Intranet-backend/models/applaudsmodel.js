const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('.././Intranet-frontend/public/uploads/avatars');


const Schema = mongoose.Schema

const ApplaudsSchema = new Schema({
    avatar:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    award:{
        type:String,
        required:true
    },
    awardDate:{
        type:String,
        required:true
    },
    awardHover:{
        type:String,
        required:true
    },
    awardDateHover:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    },
    comments:{
        type:Number,
        required:true
    }
},{ timestamps:true });


let storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./../Intranet-frontend/public/uploads/avatars');
    },
    filename: function (req,file,cb){
        cb(null, Date.now()+path.extname(file.originalname) )
    }
})

ApplaudsSchema.statics.uploadAvatar= multer({storage:storage}).single('avatar');
ApplaudsSchema.statics.avatarPath=AVATAR_PATH;


module.exports= mongoose.model('applauds',ApplaudsSchema);