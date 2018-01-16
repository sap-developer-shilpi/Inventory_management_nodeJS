const express = require('express');
const {Product} = require('./../models/product');
const {SubCategory} = require('./../models/subCategory');

const router = express.Router();


router.get('/products', function(req, res){
  Product.find().then((products)=> {
      res.render('productsIndex',{products, partial_view: true});
  },(err) => {
      res.status(400).send(err)
    });
});

router.post('/products/create', function (req, res ) {
        const product  = new Product(req.body);
        product.save(function(error) {
            if (!error) {
                Product.findById(product._id)
                    .populate('subCategory').then((product) => res.render('product', {product, partial_view: true}),
                    (err) => {
                    res.status(400).send(err);
                });
                } else {
                res.status(400).send(error);
            }
        });
});

router.get('/products/new', function(req, res) {
   SubCategory.find().then((subCategory) => {
       res.render('productForm',{subCategory,partial_view: true});
   });
});

module.exports= router;