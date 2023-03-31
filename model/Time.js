const mongoose = require('mongoose')

let TimeSchema = new mongoose.Schema({
    time:String
})

module.exports = mongoose.model('Time',TimeSchema)