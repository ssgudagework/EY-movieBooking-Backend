const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    mobile: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    noOfSeats: {
        type: Number,
        trim: true
    },
    totalPrice: {
        type: Number
    }
    
})

module.exports = mongoose.model("User",UserSchema);