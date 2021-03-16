var express = require('express');
var router = express.Router();
const cart = require('../Controller/cart.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/getAllCart', cart.getAllCart);

router.post('/addCart', cart.addCart);

module.exports = router;
