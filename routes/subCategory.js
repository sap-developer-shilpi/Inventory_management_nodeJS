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
    Category.findOne({categoryName: req.body.category}).then((category) => {
        const subCategory = new SubCategory(
            {subCategoryName: req.body.subCategoryName,
                category: category._id}
        );
        subCategory.save(function(error) {
            if (!error) {
                SubCategory.findById(subCategory._id)
                    .populate('category').then((subCategory) => res.render('subCategory',{subCategory, partial_view: true}),(err) => {
                    res.status(400).send(err);
                });

            } else {
                res.status(400).send(error);
            }
        });
    }).catch((e) => {
        res.status(404).send("No Data Found");
    });
});

router.get('/subCategories/new', function(req, res) {
    res.render('subCategoryForm',{partial_view: true});
});



module.exports= router;