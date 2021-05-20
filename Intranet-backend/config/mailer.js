const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'aayu8982@gmail.com',
        pass: '16430MCA002'
    }
});

let mailDetails = {
    from: 'aayu8982@gmail.com',
    to: 'aayu7415@gmail.com,patel7293@gmail.com',
    subject:'Test email',
    text: 'Hey! This is Aayush'
};


module.exports={mailTransporter}