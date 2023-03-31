const mongoose = require('mongoose')

let MyBookingSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    Seats:Number,
    TotalPrice:Number
})

module.exports = mongoose.model('MyBooking',MyBookingSchema)