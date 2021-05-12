const Applaud = require('../models/applaudsmodel');


createApplaud = (req,res)=>{
    const body = req.body

    console.log(body);

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
    getApplauds
}