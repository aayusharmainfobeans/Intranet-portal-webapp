const Applaud = require('../models/applaudsmodel');


createApplaud = (req,res)=>{
    const body = req.body

    console.log(body);

    if(!body){
        return res.status(400).json({
            success:false,
            error:'you must provide a complete details'
        })
    }

    const applaud = new Applaud(body);

    if(!applaud){
        return res.status(400).json({success: false,error:err})
    }

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


module.exports = {
    createApplaud
}