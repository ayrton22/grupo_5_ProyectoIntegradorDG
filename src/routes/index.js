// Express
const express = require('express');
const router = express.Router();

// Controllers require
const controller = require('../controllers/controller')

// Router and controller usage
router.get('/', controller.home)

// Module export
module.exports = router;