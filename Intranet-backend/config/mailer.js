const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.Email,
        pass: process.env.Password
    }
});




module.exports={mailTransporter}