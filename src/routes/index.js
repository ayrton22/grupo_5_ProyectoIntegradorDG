// Express
const express = require('express');
const router = express.Router();

// Controllers require
const controller = require('../controllers/controller');

// Router and controller usage
router.get('/', controller.home);
router.get('/pruebacheckbox', controller.pruebaCheckboxView);
router.post('/pruebacheckbox', controller.pruebaCheckbox);
//router.get('/error', controller.error);
// Module export
module.exports = router;