const jwt = require('jsonwebtoken');
const User = require('../models/users')

auth = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        console.log("token",token);
        const ver = jwt.verify(token,process.env.JWT_SECRET);
        console.log("verify user",ver);
        next();
    }
    else {
        res.status(401).json({status:'unauthorized'})
    }
}

module.exports={
    auth
}