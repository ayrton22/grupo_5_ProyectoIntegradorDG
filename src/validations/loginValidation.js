const {check, validationResult, body} = require('express-validator');
module.exports = [
    check('username')
        .equals()
            .withMessage('Puede ser que hays ecrito mal tu nombre de usuario'),
    check('password')
        .equals()
            .withMessage('Puede ser que hays escrito mal tu contraseña')
]