var express = require('express');
var router = express.Router();
const role = require('../controller/role.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource with roles info');
});

router.get('/getAllRole', role.getAllRole);

router.post('/createRole', role.createRole);

module.exports = router;