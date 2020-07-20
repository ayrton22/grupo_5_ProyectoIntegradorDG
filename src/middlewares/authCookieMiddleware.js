const fs = require('fs');
const path = require('path');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');

usuarios = JSON.parse(usuarios);

function authCookieMiddleware(req, res, next){
    if(req.cookies.authRemember != undefined && req.session.usernameUser == undefined){
        for(let i = 0; i < usuarios.length; i++){
            if(req.cookies.authRemember == usuarios[i].username){
                req.session.usernameUser = usuarios[i].username
            }
        }
    }
    next();
}

module.exports = authCookieMiddleware;
