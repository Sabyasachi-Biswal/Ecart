const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_img:{
        type:String,
        required:false
    }
},{timestamps:true})

exports.item = mongoose.model('product',productSchema);