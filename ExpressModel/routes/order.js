var express = require('express');
var router = express.Router();
const order = require('../Controller/order.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/getAllOrder', order.getAllOrder);

module.exports = router;