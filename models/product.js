const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
const {SubCategory} = require('./subCategory');
const validator = require('validator');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    code: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    manufacturer: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    price: {
        type: Number,
        required:true,
        minLength: 1,
        trim:true
    },
    wholesaler_url: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    order_email: {
        type: String,
        minLength: 1,
        validate: {
            validator: validator.isEmail, // is same as ---- validator: (value) => { validator.isEmail(value); }
            message: '{VALUE} is not a valid email'
        }

    },
    image: {
        type: String
    },
    subCategory: {
            type: Schema.Types.ObjectId,
            ref: 'SubCategory'
    }

});

var Product = mongoose.model('Product', ProductSchema);
module.exports = {Product};
