const mongoose = require('mongoose');

const mongoUrl = "mongodb://127.0.0.1:27017";

const connectDB = ()=>{
    mongoose.connect(mongoUrl).then((res)=>{
        console.log("DB connected successfully")
        
    }).catch((err)=>{
        console.log("Error in DB connect");
        console.log(err)
    })
}

module.exports = connectDB;