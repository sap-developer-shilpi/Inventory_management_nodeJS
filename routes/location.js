const express = require('express');
const {Location} = require('./../models/location');
const router = express.Router();


router.get('/locations', function (req, res ) {
    Location.find().then((locations) => {
        res.render('locationsIndex',{locations, partial_view: true});
   },(err) => {
        res.status(400).send(err);
    });
});

router.post('/locations/create', function (req, res ) {
    const location = new Location(req.body);
    location.save().then((location) => {
        res.render('location',{location, partial_view: true});
    },(err) => {
        res.status(400).send(err);
    });
});

router.get('/locations/new', function(req, res) {
   res.render('locationForm',{partial_view: true});
});



module.exports= router;