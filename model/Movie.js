// const mongoose = require('mongoose');


// const MovieSchema = new mongoose.Schema({
//     name:String,
//     imgUrl:String,
//     city:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "City"
//     }],
//     genre:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Genre"
//     }]

// })

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name:String,
    imgUrl:String,
    imdb:String,
    genre:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    }],
    area:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Area"
    }]
       
})

module.exports = mongoose.model("Movie", MovieSchema);