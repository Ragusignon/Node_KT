var express = require('express');
var router = express.Router();
const user = require('../controller/user.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllUser', user.getAllUser);

router.post('/addUser', user.addUser);

router.post('/modifyUser/:user_id', user.updateUser);

router.get('/deleteUser/:user_id', user.deleteUser);

router.post('/validateUser', user.validateUser);

module.exports = router;
