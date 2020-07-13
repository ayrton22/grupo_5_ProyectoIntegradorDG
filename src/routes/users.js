const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController')

router.get('/', function(req, res) {
    res.render('registro')
});
router.post('/', controller.register);

router.get('/edit/:id?', controller.edit);
router.put('/edit/:id', controller.save);

router.get('/login', function(req, res) {
    res.render('login')
});
router.post('/login', controller.login);

router.get('/profile/:id/', controller.profile);

router.get('/cart', controller.shoppingCart);

router.get('/thanks', controller.thankYouPage);

module.exports = router;