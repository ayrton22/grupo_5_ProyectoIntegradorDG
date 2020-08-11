// Modules
const fs = require('fs');
const path = require('path');

// JSON PARSE

let users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8');
users = JSON.parse(users);

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