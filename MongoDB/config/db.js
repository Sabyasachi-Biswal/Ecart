const mongoose = require('mongoose');

exports.dbConn = async()=>{
    try {
        const dbURL = "mongodb+srv://Sabyasachi:Bapa@1234@cluster0.4uxqw.mongodb.net/test";

        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('Database connected');
    } catch (err) {
        console.log(`Database connection error ${err.message}`);
    }
    
}