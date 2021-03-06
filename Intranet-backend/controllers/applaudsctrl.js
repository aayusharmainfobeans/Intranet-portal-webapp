require('dotenv').config();
const Applaud = require('../models/applaudsmodel');
const Contact = require('../models/contactModel')
const bcrypt = require('bcryptjs');
const User = require('../models/users')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mailer = require('../config/mailer');
const path = require('path')

userSignUp = async (req,res)=>{
    const {name, email, password: plainTextPassword} =req.body;

    if(!email || typeof email !=='string'){
        return res.json({status:'error',error:'Invalid email'})
    }

    if(!plainTextPassword || typeof plainTextPassword !=='string'){
        return res.json({status:'error',error:'Invalid password'})
    }

    if(plainTextPassword.length<7){
        return res.json({status:'error',error:'Password should be atleast 7 character'})
    }

    const password =await bcrypt.hash(plainTextPassword,10);   

    console.log(password);
    try{
        const response = await User.create({
            name,
            email,
            password
        })
        console.log("User Created Successfully",response);
    } catch(error){
        console.log(JSON.stringify(error) )
        if(error.code===11000){
            return res.json({status:'error',error:'Email already in use'});
        }  
    }
    res.json({status:'ok',message:'Registered Successfully'});
}

userSignin = async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email}).lean()

    if(!user){
    return res.json({status:'error',error:'Invalid email and password'})
    }

    if(bcrypt.compare(password,user.password)){
    const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET)

    return res.json({status:'ok',message:'Login Successful',role: user.role ,data: token})
    }
    res.json({status:'ok'});
}

createApplaud = (req,res)=>{
    const body = req.body

    console.log(body);

    const applaud = new Applaud({
        avatar: './uploads/avatars/'+req.file.filename,
        name:req.body.name,
        position:req.body.position,
        award:req.body.award,
        awardDate:req.body.awardDate,
        awardHover:req.body.awardHover,
        awardDateHover:req.body.awardDateHover,
        likes:req.body.likes,
        
        comments:req.body.comments
    });

    applaud.save().then(()=>{
        return res.status(201).json({
            success:true,
            id:applaud._id,
            message: 'Applaud Created'
        })
    }).catch(error=>{
        return res.status(400).json({
            error,
            message: 'Applaud not created'
        })
    })
}

getApplauds = async (req,res)=>{
    await Applaud.find({},(err,applauds)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        return res.status(200).json({success:true,data: applauds})
    }).catch(err => console.log(err));
}


contactCtrl =async (req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const description = req.body.description;
    const file = req.file.filename;

    if (!firstname || !lastname || !email || !description || !file) {
        return res.status(422).json({ error: "Please Fill All data fields" });
    }
    console.log(req.file.filename)
    
    let customerMailDetails = {
        from: process.env.Email,
        to: req.body.email,
        cc: ["aayush.sharma@infobeans.com","abhishek.patel@infobeans.com"],
        subject:'Test email',
        text: 'Our Team will contact you shortly ',
        attachments: [{filename: file,path:'.././Intranet-frontend/public/uploads/contact/'+file,contentType: 'application/pdf'}]
    };
    
    let adminMailDetails = {
        from: process.env.Email,
        to: "aayush.sharma@infobeans.com",
        subject:'New Customer Query',
        html: `
        <h3>New Query Details:</h3>
        <table>
            <tr>
                <td>Name:</td>
                <td>${firstname} ${lastname}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Message:</td>
                <td>${description}</td>
            </tr>
            <tr>
                <td>File:</td>
                <td>${file}</td>
            </tr>
        </table>
    `,
    attachments: [{filename: file,path:'.././Intranet-frontend/public/uploads/contact/'+file,contentType: 'application/pdf'}]
    }

    try{
        const contact =await Contact.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            description:req.body.description,
            file: req.file.filename
        })
        
        console.log(contact);
        mailer.mailTransporter.sendMail(adminMailDetails,function(err,data){
            if(err){
                console.log('Error Occurs',err);
            } else {
                console.log('Admin Email Sent Successfully');
            } 
        })
        mailer.mailTransporter.sendMail(customerMailDetails,function(err,data){
            if(err){
                console.log('Error Occurs',err);
            } else {
                console.log('Email Sent Successfully');
            } 
        })
        return res.status(201).json({
            success:true,
            id:contact._id,
            message: 'Thanks for Contact'
        })
    } catch(error){
        return res.status(400).json({
            error,
            message: 'OOps There is some issue'
        })
    }
}

contactListCtrl = async (req,res)=>{
    await Contact.find({},(err,contacts)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        return res.status(200).json({success:true,data: contacts})
    }).catch(err => console.log(err));
}


module.exports = {
    createApplaud,
    getApplauds,
    userSignUp,
    userSignin,
    contactCtrl,
    contactListCtrl
}