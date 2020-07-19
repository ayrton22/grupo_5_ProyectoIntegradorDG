const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController')

router.get('/register', controller.register);
router.post('/register', controller.save);

router.get('/edit/:id?', controller.edit);
router.put('/edit/:id', controller.update);

router.get('/login', controller.login);
router.post('/login', controller.confirm);

router.get('/profile/:id/', controller.profile);

router.get('/cart', controller.shoppingCart);

router.get('/thanks', controller.thankYouPage);

module.exports = router;