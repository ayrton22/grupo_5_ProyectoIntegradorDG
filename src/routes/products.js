// Express
const express = require('express');
const router = express.Router();

// Controller require
const controller = require('../controllers/productsController.js');

// Middleware require
const uploadImageProductMiddleware = require('../middlewares/uploadImageProductMiddlware')

// Router, controller and middleware usage
router.get('/', controller.list);

router.get('/detail/:id', controller.detail);
router.delete('/detail/:id', controller.destroy);

router.get('/genres/:id_genero?', controller.genres);

router.get('/load', controller.load);
router.post('/load', uploadImageProductMiddleware.any() ,controller.store);

router.get('/edit/:id', controller.edit);
router.put('/edit/:id', controller.update);

router.get('/search', controller.productSearch);

// Module export
module.exports = router;