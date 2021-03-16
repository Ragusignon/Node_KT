var express = require('express');
var router = express.Router();
const application = require('../Controller/application.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/getAllApplication', application.getAllApplication);

module.exports = router;