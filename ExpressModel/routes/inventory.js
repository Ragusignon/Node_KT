var express = require('express');
var router = express.Router();
const inventory = require('../Controller/inventory.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllInventory', inventory.getAllInventoryInfo);

module.exports = router;