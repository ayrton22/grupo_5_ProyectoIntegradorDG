// Express
const express = require('express');
const router = express.Router();

// Validation require
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

// Middleware require
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const authMiddleware2 = require('../middlewares/auth2Middleware');
const passwordRepassMiddleware = require('../middlewares/passwordRepassMiddleware');

// Controller require
const controller = require('../controllers/userController');

// Route, controller, middleware and validation usage

router.get('/prueba/:id', controller.prueba);
router.get('/register', controller.register);
router.post('/register', registerValidation, passwordRepassMiddleware ,controller.save);

router.get('/edit/:id?', controller.edit);
router.put('/edit/:id', uploadImageMiddleware.any() ,controller.update);
router.delete('/delete/:id', controller.delete);

router.get('/login', controller.login);
router.post('/login', loginValidation, controller.confirm);

router.get('/profile/:id/', authMiddleware ,  authMiddleware2, controller.profile); 

router.get('/cart/:id',authMiddleware, controller.cart);
router.post('/cart/:id',authMiddleware, controller.addGamesCart);

router.get('/thanks', authMiddleware ,controller.thankYouPage);

router.get('/logout', authMiddleware  ,controller.logout);

router.get('/community',controller.community);

router.get('/buyFormChoose', authMiddleware, controller.buyFormChoose);
router.get('/buyFormDelivery', authMiddleware ,controller.buyFormDeliveryView);
router.get('/buyFormLocal', authMiddleware ,controller.buyFormLocalView);
router.get('/paymentMethodForm', authMiddleware ,controller.paymentMethodView);

// Module export
module.exports = router;