var express = require('express');
var router = express.Router();
const wishlist = require('../Controller/wishlist.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/getAllWishList', wishlist.getAllWishList);

router.post('/addList', wishlist.addList);

module.exports = router;