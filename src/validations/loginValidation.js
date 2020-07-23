const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

module.exports = [
    check('username')
        .isLength({min: 5, max: 20}).withMessage('Puede ser que hays ecrito mal tu nombre de usuario'),
    check('password')
        .isLength({min: 6, max: 20}).withMessage('Puede ser que hays escrito mal tu contraseña'),
    body('username')
        .custom(function(value) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].username == value) {
                return true;
            }
        }
            return false
        }).withMessage('Este nombre de usuario no está registrado!')
]