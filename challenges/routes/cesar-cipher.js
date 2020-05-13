const express = require('express');
const router = express.Router();
const cesarCipherController = require('../controllers/cesar-cipher');

router.get('/', cesarCipherController.answer);

module.exports = router;
