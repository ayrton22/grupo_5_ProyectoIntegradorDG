const db = require('../database/models');

let users = db.Users.findAll().then(result => { return result })

function authCookieMiddleware(req, res, next){
    if(req.cookies.authRemember != undefined && req.session.usernameUser == undefined){
        for(let i = 0; i < users.length; i++){
            if(req.cookies.authRemember == users[i].username){
                req.session.usernameUser = users[i].username
            }
        }
    }
    next();
}

module.exports = authCookieMiddleware;
