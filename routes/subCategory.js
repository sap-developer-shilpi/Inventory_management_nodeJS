const express = require('express');
const {SubCategory} = require('../models/subCategory');
const router = express.Router();
const {Category} = require('./../models/category');

router.get('/subCategories', function (req, res ) {
    SubCategory.find().populate('category').then((subCategories) => {
        res.render('subCategoryIndex',{subCategories, partial_view: true});
    },(err) => {
        res.status(400).send(err);
    });
});

router.post('/subCategories/create', function (req, res ) {

    const subCategory = new SubCategory(req.body);
    subCategory.save(function (error) {
        if (!error) {
            SubCategory.findById(subCategory._id)
                .populate('category').then((subCategory) => res.render('subCategory', {subCategory, partial_view: true}),
                (err) => {
                res.status(400).send(err);
            });

        } else {
            res.status(400).send(error);
        }
    });
});

router.get('/subCategories/new', function(req, res) {
    Category.find().then((category) =>{
        res.render('subCategoryForm',{category,partial_view: true});
    });

});



module.exports= router;