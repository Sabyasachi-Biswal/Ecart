const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false
    }
},{timestamps:true})

exports.user = mongoose.model('user',userSchema);