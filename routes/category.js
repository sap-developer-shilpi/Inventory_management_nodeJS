const express = require('express');
const {Category} = require('./../models/category');
const router = express.Router();


router.get('/categories', function (req, res ) {
    Category.find().then((categories) => {
        res.render('categoryIndex',{categories, partial_view: true});
    },(err) => {
        res.status(400).send(err);
    });
});

router.post('/categories/create', function (req, res ) {
    const category = new Category(req.body);
    category.save().then((category) => {
        res.render('category',{category, partial_view: true});
    },(err) => {
        res.status(400).send(err);
    });
});

router.get('/categories/new', function(req, res) {
    res.render('categoryForm',{partial_view: true});
});



module.exports= router;