const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    cityName:String,
    movie:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }]
})

module.exports = mongoose.model("City",CitySchema);