var express = require('express');
var router = express.Router();
const employee = require('../Controller/employee.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/getAllEmployee', employee.getAllEmployee);

router.post('/modifyemployee/:EmployeeID', employee.updateEmployee);

module.exports = router;