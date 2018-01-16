const express = require('express');
const router = express.Router();
const {Category} = require('./../models/category');
router.get('/', function (req, res) {
    Category.find().then((category) => {
        res.render('index',{category});
    });
});

router.get('/about', function (req, res) {
    res.render('about');
});


module.exports= router;