const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController')


router.get('/register', controller.register);
router.get('/cart', controller.shoppingCart);
router.get('/signIn', controller.signIn);

module.exports = router;