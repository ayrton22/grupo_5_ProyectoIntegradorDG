const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');
<<<<<<< HEAD
const loginValidation = require('../validations/loginValidation');
=======
const uploadImageMiddleware = require('../middlewares/uploadImageMiddleware');
>>>>>>> 1854342d7dccc6277ddc4c7bfc87b297bf36dd08

router.get('/register', controller.register);
router.post('/register', controller.save);

router.get('/edit/:id?', controller.edit);
router.put('/edit/:id', uploadImageMiddleware.any() ,controller.update);

router.get('/login', controller.login);
router.post('/login', loginValidation, controller.confirm);

router.get('/profile/:id/', controller.profile);

router.get('/cart', controller.shoppingCart);

router.get('/thanks', controller.thankYouPage);

module.exports = router;