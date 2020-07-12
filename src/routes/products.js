const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController.js')

router.get('/', controller.allProducts);
router.get('/detail', controller.detail);
router.get('/load', controller.productLoad);
router.post('/load',controller.productUpdate);


module.exports = router;