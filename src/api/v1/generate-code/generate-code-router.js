const express = require('express');
const router = express.Router();
const generateCodeController = require('./generate-code-controller');

router.post('/', generateCodeController.generateCode);

module.exports = router;
