const express = require('express');
const router = express.Router();
const {Location} = require('./../models/location');

router.get('/dashboard', function (req, res ) {
    Location.find().then((locations) => {
        res.render('dashboard',{locations});
},(err) => {
        res.status(400).send(err);
    });
});


module.exports= router;