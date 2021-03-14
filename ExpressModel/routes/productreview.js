var express = require('express');
var router = express.Router();
const productreview = require('../Controller/productreview.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllProductReview', productreview.getAllProductReview);