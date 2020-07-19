const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const registerValidation = require('../validations/registerValidation');

const controller = require('../controllers/userController')
=======
const controller = require('../controllers/userController');
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
>>>>>>> 1854342d7dccc6277ddc4c7bfc87b297bf36dd08

router.get('/register', controller.register);
router.post('/register', registerValidation, controller.save);

router.get('/edit/:id?', controller.edit);
router.put('/edit/:id', uploadImageMiddleware.any() ,controller.update);

router.get('/login', controller.login);
router.post('/login', controller.confirm);

router.get('/profile/:id/', controller.profile);

router.get('/cart', controller.shoppingCart);

router.get('/thanks', controller.thankYouPage);

module.exports = router;