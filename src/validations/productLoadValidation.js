const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
        .isAlpha()
        .isLength({max: 50})
            .withMessage('Tu nombre no puede tener números ni caracteres especiales, y un maximo de 50 caracteres'),
]