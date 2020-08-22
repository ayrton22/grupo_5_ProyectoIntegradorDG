const {check, validationResult, body} = require('express-validator');
const db = require('../database/models');

let regx = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;

module.exports = [
    check('title')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isLength({max: 50})
            .withMessage('el titulo de un juego no puede tener números ni caracteres especiales, y un maximo de 50 caracteres'),

    check('price')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isNumeric()
            .withMessage('el campo precio debe ser de tipo numerico'),

    check('description')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isLength({max: 147}) // descripcion corta fifa (con espacios incluidos)
            .withMessage('este campo no puede tener mas de 46 caracteres'),

    check('medium_description')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isLength({max: 761}) // descripcion mediana Tomb Raider (con espacios incluidos)
            .withMessage('estas sobrepasando el minimo de caracteres'),

    check('big_description')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isLength({ max: 1622})
            .withMessage('estas sobrepasando el minimo de caracteres'),
    
    check('editor')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isLength({max: 50})
            .withMessage('este campo no puede tener mas de 50 caracteres'),
    
    check('developer')
        .not().isEmpty()
            .withMessage('el campo no puede estar vacio')
        .isLength({max: 50})
            .withMessage('este campo no puede tener mas de 50 caracteres'),
    
    check('')
]