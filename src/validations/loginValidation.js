const {check, validationResult, body} = require('express-validator');
module.exports = [
    check('username')
        .isLength({min: 5, max: 20}).withMessage('Puede ser que hays ecrito mal tu nombre de usuario'),
    check('password')
        .isLength({min: 6, max: 20}).withMessage('Puede ser que hays escrito mal tu contraseña')
]