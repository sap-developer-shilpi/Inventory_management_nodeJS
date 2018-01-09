const mongoose = require('mongoose');
const validator = require('validator');
const LocationSchema = new mongoose.Schema({
    locName: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    locCode: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        minLength: 1
    },
    representative: {
        type:String,
        required: true,
        minLength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail, // is same as ---- validator: (value) => { validator.isEmail(value); }
            message: '{VALUE} is not a valid email'
        }
    },
    city: {
        type:String,
        required: true,
        minLength: 1,
        trim: true
    },
    state: {
        type:String,
        required: true,
        minLength: 1,
        trim: true
    },
    zipCode: {
        type: Number,
        required: true,
        minLength: 1
    },
    country: {
        type:String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var Location = mongoose.model('Location', LocationSchema);
module.exports = {Location};
