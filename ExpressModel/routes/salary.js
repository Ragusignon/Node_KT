var express = require('express');
var router = express.Router();
const salary = require('../Controller/salary.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllSalary', salary.getAllSalary);

router.post('/modifySalary/:SalaryID', salary.UpdateSalary);

module.exports = router;
