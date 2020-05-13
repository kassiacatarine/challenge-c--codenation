const express = require('express');
const router = express.Router();

const cesarChiperController = require('../controllers/cesar-cipher');

router.get('/', function(req, res) {
  res.render('cesar-cipher/form-token');
});

router.post('/generate-answer', cesarChiperController.generateAnswer);

router.get('/answer', function(req, res) {
  console.log(req.body);
  res.render('cesar-cipher/answer');
});

module.exports = router;