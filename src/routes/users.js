const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController')

router.get('/', function(req, res) {
    res.render('registro')
});
router.post('/', controller.register);

router.get('/cart', controller.shoppingCart);

router.get('/thanks', controller.thankYouPage);

router.get('/login', function(req, res) {
    res.render('login')
})
router.post('/login', controller.login);

module.exports = router;