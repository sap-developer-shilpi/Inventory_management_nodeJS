const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
const {Category} = require('./../models/category');
const SubCategorySchema = new mongoose.Schema({
    subCategoryName: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    category: {
        type: Schema.Types.ObjectId,
            ref: 'Category'
    }
});

var SubCategory = mongoose.model('SubCategory', SubCategorySchema);
module.exports = {SubCategory};