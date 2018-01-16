const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    image:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = {Category};
