const Applaud = require('../models/applaudsmodel');
const bcrypt = require('bcryptjs');
const User = require('../models/users')

userSignUp = async (req,res)=>{
    const {name, email, password: plainTextPassword} =req.body;

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
        console.log(error.message)
        return res.json({status:'error'})
    }

    res.json({status:'ok'});
}

createApplaud = (req,res)=>{
    const body = req.body

    console.log(body);

    const applaud = new Applaud(body);

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


module.exports = {
    createApplaud,
    getApplauds,
    userSignUp
}