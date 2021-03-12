var express = require('express');
var router = express.Router();
const user = require('../controller/user.controller.js');
const { route } = require('./index.js');
const roleRouter = require('./roles.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/roles', roleRouter);

router.get('/getAllUser', user.getAllUser);

router.post('/addUser', user.addUser);

router.post('/modifyUser/:user_id', user.updateUser);

router.get('/deleteUser/:user_id', user.deleteUser);

router.post('/validateUser', user.validateUser);

router.get('/searchUsers', user.searchUsers);

module.exports = router;
