const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller')

router.get('/', controller.detail);
router.get('/cargaProducto', controller.cargarProducto)


module.exports = router;