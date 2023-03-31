const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    genre:String
})

module.exports = mongoose.model("Genre",GenreSchema);