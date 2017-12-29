const express = require('express');
const {Product} = require('./../models/product');
const router = express.Router();


router.get('/products', function(req, res){
  Product.find().then((products)=> {
      res.render('product',{products, partial_view: true});
  },(err) => {
      res.status(400).send(err)
    });
});


module.exports= router;