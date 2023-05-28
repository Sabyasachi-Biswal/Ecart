const express = require('express');
const { dbConn } = require('./config/db');
const product_routes = require('./routes/operation');
const user_routes = require('./routes/user')
const cors = require('cors');
const product = express();
const port = 1234;

product.use(express.json());
product.use(cors());
product.use('/product',product_routes);
product.use('/admin',user_routes);


dbConn();

product.listen(port,(err)=>{
    if(err)
        console.log(err);
    console.log(`server started at port ${port}`);
})