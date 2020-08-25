const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

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

    body('username')
        .custom(async function(value) {
            let usuario = await db.Users.findOne({ where:{ username: value } })
              .then(function(elUsuario){
                if (elUsuario){
                  return false
                } else {
                  return true
                }
              })
              return usuario 
        }).withMessage('Este nombre de usuario ya está en uso'),
        
    check('email')
        .isEmail()
            .withMessage('Tenés que insertar un email válido'),

    body('email')
        .custom(async function(value) {
            let usuario = await db.Users.findOne({ where:{ email: value } })
              .then(function(elUsuario){
                if (elUsuario){
                  return false
                } else {
                  return true
                }
              })
              return usuario
        }).withMessage('Esta direccion de E-Mail ya está en uso'),
            
    check('password')
        .isLength({min: 6, max: 20})
            .withMessage('Como mínimo la contraseña debe tener 4 caracteres. Como máximo 16'),
]