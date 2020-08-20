const {check, validationResult, body} = require('express-validator');

const db = require('../database/models');

let users = db.Users.findAll().then(result => { return result })

module.exports = [
    check('username')
        .isLength({min: 5, max: 20}).withMessage('Puede ser que hayas escrito mal tu nombre de usuario'),
    check('password')
        .isLength({min: 6, max: 20}).withMessage('Puede ser que hayas escrito mal tu contraseña'),
    body('username')
        .custom(async function(value) {
            let usuario = await db.Users.findOne({ where:{ username:value } })
            .then(function (elUsuario){
                if(elUsuario){
                    return true
                } else {
                    return false
                }
            })
            return usuario
        }).withMessage('Este nombre de usuario no está registrado!')
]