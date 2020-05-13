var express = require('express');
var router = express.Router();

const auth = require('../utils/auth');
const authController = require('../controllers/auth');

router.get('/login', auth.optional, function(req, res) {
  res.render('auth/login');
});

router.post('/login', auth.optional, authController.login);

// router.get('/current', auth.optional, authController.current);

// router.get('/logout', auth.optional, authController.logout);

module.exports = router;