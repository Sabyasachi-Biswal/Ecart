const jwt = require('jsonwebtoken');

const Auth = async (req,res,next)=>{
   try {
    const token = req.headers['x-auth-token'];//used when there is space or dash in the name
    if(!token){
        res.status(400).json({
            message:"Missing Auth token"
        })
    }
    if(await jwt.verify(token,'siliconMERNCourse')){
        next();
    }
    else{
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
   } catch (err) {
    res.status(500).json({

        message:"something went wrong from Auth",
        error:err.message
    })
   } 
}
module.exports = Auth;