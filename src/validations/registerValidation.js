const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('name')
        .isAlpha()
            .withMessage('Tu nombre no puede tener números ni caracteres especiales')
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

    body('username')
        .custom(function(value) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].username == value) {
                return false;
            }
        }
            return true
        }).withMessage('Este nombre de usuario ya está en uso'),
        
    check('email')
        .isEmail()
            .withMessage('Tenés que insertar un email válido'),

    body('email')
        .custom(function(value) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email == value) {
                return false;
            }
        }
            return true
        }).withMessage('Este mail ya está registrado!'),
            
    check('password')
        .isLength({min: 6, max: 20})
            .withMessage('Como mínimo la contraseña debe tener 4 caracteres. Como máximo 16'),

    /*check('password')
        .matches('repassword')
            .withMessage('Las contraseñas no coinciden')*/
]