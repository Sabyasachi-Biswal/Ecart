const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { user } = require('../model/user');
const jwt = require('jsonwebtoken');
router.post('/register',async (req,res)=>{
    try {
        let { full_name,email,password } = req.body;

        //generate password hash
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt);

        const USER = new user({full_name,email,password});
        await USER.save();
        return res.status(200).json({
            message:"user saved successfully",
            USER
        })
    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
    }
    
})

router.post('/login',async(req,res)=>{
    try {
        const{email,password}=req.body;
        const USER = await user.findOne({email:email});
        if(USER){
            const verifyuser = await bcrypt.compare(password,USER.password);
            if(verifyuser){
                const payload = {
                    USER:{
                        id:USER._id
                    }
                }
                const token = jwt.sign(payload,'siliconMERNCourse',{expiresIn:3600});
                return res.status(200).json({
                    message:"LOGGED IN",
                    USER:{USER_id:USER._id,email:USER.email},
                    token
                })
            }else{
                return res.status(401).json({
                    message:"wrong username/password"
                })
            }
        }else{
            return res.status(401).json({
                message:"wrong username/password"
            })
        }
    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
    }


    
})

module.exports = router;