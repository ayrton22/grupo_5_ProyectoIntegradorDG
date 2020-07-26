const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController.js')
const uploadImageProductMiddleware = require('../middlewares/uploadImageProductMiddlware')

router.get('/', controller.allProducts);

router.get('/detail/:id', controller.detail);
router.delete('/detail/:id', controller.destroy)

router.get('/load', controller.load);
router.post('/load', uploadImageProductMiddleware.any() ,controller.store);

router.get('/edit/:id', controller.edit);
router.put('/edit/:id', controller.update);

module.exports = router;