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
    SubCategory.findOne({subCategoryName: req.body.subCategory}).then((subCategory) => {
        const product  = new Product(
            {name: req.body.name,
                code: req.body.code,
                price: req.body.price,
                manufacturer: req.body.manufacturer,
                wholesaler_url: req.body.url,
                order_email: req.body.Oemail,
                image: req.body.image,
                subCategory: subCategory._id}
        );
        product.save(function(error) {
            if (!error) {
                Product.find({})
                    .populate('subCategory')
            }
        }).then((product) => {
            res.render('product',{product, partial_view: true});
        });
    }).catch((e) => {
        console.log(e);
        res.status(404).send("No Data Found");
    });
});

router.get('/products/new', function(req, res) {
    res.render('productForm',{partial_view: true});
});

module.exports= router;