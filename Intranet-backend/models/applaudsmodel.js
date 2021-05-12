const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ApplaudsSchema = new Schema({
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

module.exports= mongoose.model('applauds',ApplaudsSchema);