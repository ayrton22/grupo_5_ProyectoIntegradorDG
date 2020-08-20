// Modules
const fs = require('fs');
const path = require('path');

// JSON PARSE
const db = require('../database/models');

let users = db.Users.findAll().then(result => { return result })

function authMiddleware2 (req, res, next){
    let url = req.params;
    let usuarioAigualar;

    for(let i = 0; i < users.length; i++){
        if(url.id == users[i].id){
           usuarioAigualar = users[i].username
        }
    }

    if(req.session.usernameUser != usuarioAigualar){
        return res.render('error')
    } else {
        next();
    }
}

module.exports = authMiddleware2;