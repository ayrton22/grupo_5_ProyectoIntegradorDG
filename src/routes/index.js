const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');

router.get('/', controller.index)

module.exports = router;