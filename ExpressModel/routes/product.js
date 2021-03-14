var express = require('express');
var router = express.Router();
const product = require('../Controller/product.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllProduct', product.getAllProduct);

router.get('/getShortPrice', product.getShortPrice);

router.get('/getAllProductFromCategory', product.getAllProductFromCategory);

router.post('/getProductCategory/:CategoryID', product.getProductCategory);


module.exports = router;