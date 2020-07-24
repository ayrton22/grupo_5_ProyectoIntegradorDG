const fs = require('fs');
const path = require('path');
let usuarios = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
usuarios = JSON.parse(usuarios);

function authMiddleware(req, res, next){
    if(!req.session.usernameUser){
        res.redirect('/user/login')
    } else {
        next();
    }
}

module.exports = authMiddleware;