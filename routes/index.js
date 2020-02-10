const { Router } = require('express');

const router = Router();

const Product = require('../models/product')

/* GET index page. */
router.get('/', (req, res) => {
  Product.find((err, data)=>{
      let products = data;
      res.render('index', {
        title: 'Express',
        products: products
    });

  });
});

module.exports = router;
