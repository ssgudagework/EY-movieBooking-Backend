const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
    area :String,
    price:Number,
    time:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Time"
    }]
})

module.exports = mongoose.model("Area",AreaSchema);