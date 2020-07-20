const express = require('express');
const router = express.Router();

const registerValidation = require('../validations/registerValidation');

const controller = require('../controllers/userController');
const loginValidation = require('../validations/loginValidation');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/register', controller.register);
router.post('/register', registerValidation, controller.save);

router.get('/edit/:id?', controller.edit);
router.put('/edit/:id', uploadImageMiddleware.any() ,controller.update);

router.get('/login', controller.login);
router.post('/login', loginValidation, controller.confirm);

router.get('/profile/:id/', authMiddleware ,controller.profile);

router.get('/cart', controller.shoppingCart);

router.get('/thanks', controller.thankYouPage);

router.get('/logout', authMiddleware  ,controller.logout);

module.exports = router;