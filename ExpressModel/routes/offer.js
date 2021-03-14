var express = require('express');
var router = express.Router();
const offer = require('../Controller/offer.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllOffer', offer.getAllOffer);

router.post('/getIndividualOffer/:UserID', offer.getIndividualOffer);

module.exports = router;