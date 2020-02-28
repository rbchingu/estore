const { Router } = require('express');

const router = Router();
const csrf = require('csurf');

const Product = require('../models/product')

const csrfProtection = csrf();
router.use(csrfProtection);

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

router.get('/user/signup', (req, res) => {
  res.render('user/signup', {csrfToken: req.csrfToken()});

});

router.post('/user/signup', (req, res) => {
  res.redirect('/');
})

module.exports = router;
