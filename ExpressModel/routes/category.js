var express = require('express');
var router = express.Router();
const category = require('../Controller/category.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllCategory', category.getAllCategory);


module.exports = router;