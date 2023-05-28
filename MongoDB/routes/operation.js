const express = require('express');
const router = express.Router();
const { item } = require('../model/item');

router.get('/',async(req,res)=>{
    try{
        let product = await item.find();
        return res.status(200).json({
            message:"Data fetched successfully",
            product
        })
    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
    }
    
})

router.post('/add',(req,res)=>{
    try{
        let error = '';
        let { name,price,img } = req.body;
        if(name == '' && error == ''){
            error = "Missing Product Name";
            return res.status(400).json({
                message:error
            })
        }
        if(price == "" && error == ''){
            error = "Missing Product Price";
            return res.status(400).json({
                message:error
            })
        }
        let p = new item({product_name:name,product_price:price,product_img:img});
        
        p.save().then((result)=>{
            return res.status(200).json({
                message:"Data saved successfully",
                result
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                message:"something went wrong",
                error: err.message
            })
        })

    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
    }
})

router.delete('/delete/:name',async (req,res)=>{
    try {
            let name = req.params.name;
            if(name == ''){
                return res.status(200).json({
                    message: 'Pls enter a name'
                })
            }
            let deletedProduct = await item.findOneAndDelete({product_name:name});
                return res.status(200).json({
                    message: 'Product deleted succesfully',
                    deletedProduct
                })
        
    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
    }
})


router.put('/update/:name',async (req,res)=>{
    try {
            let error = '';
            let name = req.params.name;
            if(name == ''){
                return res.status(200).json({
                    message: 'Pls enter a name'
                })
            }
            let { price,img } = req.body;
            if(price == "" && error == ''){
                error = "Missing Product Price";
                return res.status(400).json({
                    message:error
                })
            }
            
            //let updatedProduct = await item.findOneAndUpdate({product_name:name},{product_price:price,product_desc:desc,product_img:img});
            let product = await item.findOne({product_name:name})
            product.product_price = price;
            product.product_img = img;
            let data =  await product.save();
            return res.status(200).json({
                message: 'Product updated succesfully',
                data
            })

    } catch (err) {
        return res.status(500).json({
            message:"something went wrong",
            error: err.message
        })
    }
})

router.use((req,res,next)=>{
    res.status(404).send("404 error");
})

module.exports = router;