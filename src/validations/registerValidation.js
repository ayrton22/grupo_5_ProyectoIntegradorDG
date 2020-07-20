const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('name')
        .isAlpha()
        .isLength({max: 50})
            .withMessage('Tu nombre no puede tener números ni caracteres especiales, y un maximo de 50 caracteres'),

    check('surname')
        .isAlpha()
            .withMessage('Tu apellido no puede tener números ni caracteres especiales')
        .isLength({max: 50})
            .withMessage('Tu apellido no puede tener más de 50 caracteres'),

    check('username')
        .isLength({min: 5, max: 20})
            .withMessage('Tu nombre de usuario tiene que tener entre 5 y 20 caracteres'),
        
    check('email')
        .isEmail()
            .withMessage('Tenés que insertar un email válido'),
            
    check('password')
        .isLength({min: 6, max: 20})
            .withMessage('Como mínimo la contraseña debe tener 4 caracteres. Como máximo 16'),

    /*check('repassword')
        .matches('password')
            .withMessage('Las contraseñas no coinciden')*/
]