const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller')

router.get('/', controller.register);
router.get('/cart', controller.shoppingCart);

module.exports = router;